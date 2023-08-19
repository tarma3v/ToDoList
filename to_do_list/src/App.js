import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import MyButton from "./components/UI/Buttons/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import './components/styles/App.css' 
import { ToDoStore } from "./ToDoStore";
import DeleteButton from "./components/UI/Buttons/DeleteButton";

function App() {
  let todo = new ToDoStore();
  const [tasks, setTasks] = useState(todo.getAllItems());

  const [task, setTask] = useState('');

  const addNewTask = (e) => {
    e.preventDefault(); 
    todo.addItem(tasks, task);
    setTasks(todo.getAllItems());
    setTask('');
  }

  const deleteDoneTasks = () => {
    todo.deleteDoneTasks(tasks);
    setTasks(todo.getAllItems());
  }

  const onTaskItemChanged = (id, state) => {
    let tasks_json = todo.getAllItems();
    for (let task of tasks_json) {
      if (task.id == id) {
        task.done = state == "true" ? "false" : "true";
        break;
      }
    }

    todo.updateItem(tasks_json);
    setTasks(todo.getAllItems());
  }

  return (
    <div className="App">
      <form>
        <MyInput 
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="Task"
       />
        <MyButton onClick={addNewTask}>Добавить задание!</MyButton>
      </form>
      <TaskList tasks={tasks} title="Список заданий" onTaskItemChanged={onTaskItemChanged}/>
      <DeleteButton onClick={deleteDoneTasks}>Очистить выполненные задания</DeleteButton>
    </div>
  );
}

export default App;
