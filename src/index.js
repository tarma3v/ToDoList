//alert(1);

setTimeout(5000);

let newTask = document.createElement('h2');
newTask.className = "task";
newTask.innerHTML = document.getElementById('taskInput');

document.body.append(newTask);