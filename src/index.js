import "./styles.css";
import project from "./project";

const TodoList = document.getElementById("todo-list");

function CreateTemplate() {
  TodoList.innerHTML = `<div class="ToDo">
            <h1>To Do</h1>
            <div
              id="To_Do"></div>
          </div>
          <div class="Doing">
            <h1>Doing</h1>
            <div id="Doing"></div>
          </div>
          <div class="Done">
            <h1>Done</h1>
            <div id="Done"></div>
          </div>`;
}
CreateTemplate();

function addCard() {
  const ListToDo = document.getElementById("To_Do");

  ListToDo.innerHTML = `<div
  id="1"
  class="card"
 >
  Thing
</div>
`;
}

addCard();

// project();
