import "./styles.css";
import {
  arrayProjects,
  Project,
  TodosProject,
  createProject,
  createTodo,
  addTodoToProject,
} from "./project&todos";

const TodoList = document.getElementById("todo-list");

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

// function CreateTemplate() {
//   TodoList.innerHTML = `<div class="ToDo">
//             <h1>To Do</h1>
//             <div
//               id="To_Do"></div>
//           </div>
//           <div class="Doing">
//             <h1>Doing</h1>
//             <div id="Doing"></div>
//           </div>
//           <div class="Done">
//             <h1>Done</h1>
//             <div id="Done"></div>
//           </div>`;
// }
// CreateTemplate();

// function addCard() {
//   const ListToDo = document.getElementById("To_Do");

//   ListToDo.innerHTML = `<div
//   id="1"
//   class="card"
//  >
//   Thing
// </div>
// `;
// }

addCard();
