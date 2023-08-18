import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import MyButton from "./components/UI/Buttons/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import './components/styles/App.css' 
import { ToDoStore } from "./ToDoStore";
import DeleteButton from "./components/UI/Buttons/DeleteButton";

function App() {
  let todo = new ToDoStore();
  const [tasks, setTasks] = useState(todo.restore());

  const [task, setTask] = useState('');

  const addNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title: task,
      done: "false"
    }

    // consistent using class
    setTasks([...tasks, newTask]);
    todo.addItem(tasks);

    setTask('');
  }

  const deleteDoneTasks = () => {
    let notDoneTasks = [];
    for (let item of tasks) {
      if (item.done == "false") {
        notDoneTasks.push(item);
      }
    }
    setTasks(notDoneTasks);
    todo.deleteDoneTasks(tasks);
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
      <TaskList tasks={tasks} title="Список заданий" />
      <DeleteButton onClick={deleteDoneTasks}>Очистить выполненные задания</DeleteButton>
    </div>
  );
}

export default App;
