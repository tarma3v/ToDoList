export class ToDoStore {
  addItem = (tasks, task) => {
    const newTask = {
      id: Date.now(),
      title: task,
      done: "false"
    }
    this.setItems([...tasks, newTask]);
  }

  deleteDoneTasks = (tasks) => {
    let notDoneTasks = [];
    for (let item of tasks) {
      if (item.done == "false") {
        notDoneTasks.push(item);
      }
    }
    this.setItems(notDoneTasks);
  }

  setItems = (tasks) => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  getAllItems = () => {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        return JSON.parse(savedTasks);
      } else {
        return [];
      }
  }

  updateItem = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}