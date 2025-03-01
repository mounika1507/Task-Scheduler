const taskIn=document.getElementById("task");
const priorityIn=document.getElementById("priority");
const deadlineIn=document.getElementById("deadline");
const addtaskbutton=document.getElementById("addtask");
const tasklistIn=document.getElementById("tasklist");

addtaskbutton.addEventListener("click", () =>{
    const task = taskIn.value;
    const priority = priorityIn.value;
    const deadline = deadlineIn.value;
    if (task.trim() === "" || deadline === "") {
     window.alert("Please select task and date.")
        return; 
    }
    const selectedDate = new Date(deadline);
    const currentDate = new Date();
    const selectedDateStr = selectedDate.toISOString().split("T")[0];
    const currentDateStr = currentDate.toISOString().split("T")[0];
    if (selectedDateStr < currentDateStr) {
        alert("Please select today’s date or a future date.");
        return; 
    }
    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    taskItem.innerHTML = `
    <p>Task:${task}</p>
    <p>Priority: ${priority}</p>
    <p>Deadline: ${deadline}</p>
    <button class="mark-done">Mark Done</button>
    <button class="delete-task">Delete</button>`;
    tasklistIn.appendChild(taskItem);
    taskIn.value = "";
    priorityIn.value = "top";
    deadlineIn.value = "";
});
     tasklistIn.addEventListener("click", (event) => {
      if (event.target.classList.contains("mark-done")) {
        event.target.innerText = event.target.innerText === "Mark Done" ? "Undo" : "Mark Done";
     }
     if (event.target.classList.contains("delete-task")) {
        event.target.parentElement.remove(); 
    }
});
