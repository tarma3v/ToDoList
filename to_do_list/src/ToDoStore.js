export class ToDoStore {
    addItem(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    restore() {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
          return JSON.parse(savedTasks);
        } else {
          return [];
        }
    }

    deleteDoneTasks(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}