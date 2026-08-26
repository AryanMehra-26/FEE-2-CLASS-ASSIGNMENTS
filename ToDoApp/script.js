const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        const text = document.createElement("span");
        text.textContent = task;

        const actions = document.createElement("div");
        actions.className = "actions";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";

        editBtn.onclick = () => {
            const newTask = prompt("Edit task", task);

            if(newTask !== null && newTask.trim() !== ""){
                tasks[index] = newTask.trim();
                saveTasks();
                renderTasks();
            }
        };

        deleteBtn.onclick = () => {
            tasks.splice(index,1);
            saveTasks();
            renderTasks();
        };

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(text);
        li.appendChild(actions);

        taskList.appendChild(li);
    });
}

function addTask(){

    const value = input.value.trim();

    if(value === "") return;

    tasks.push(value);

    saveTasks();
    renderTasks();

    input.value = "";
    input.focus();
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

renderTasks();
