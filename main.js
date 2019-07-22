const form= document.querySelector("form");
const tasks= document.querySelector(".tasks");
const listItem= document.getElementsByClassName("task");
const input = document.querySelector("input");

const removeTask = (e)=>{
    e.target.remove();
    console.log("działa")
}

const addTask = (e) =>{
e.preventDefault();
let titleTask = input.value;

if ( titleTask === "") return;
console.log("titleTask");
// dodawanie elementu
const task = document.createElement("li");
task.textContent =titleTask;

task.className="task";
tasks.appendChild(task);
input.value="";
task.addEventListener("click",removeTask);
}

form.addEventListener("submit", addTask);
