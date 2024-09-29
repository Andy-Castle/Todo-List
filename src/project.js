// export default function project() {
let arrayProjects = [];

// class Project {
//   constructor(name) {
//     this.id = arrayProjects.length += 1;
//     this.name = name;
//     this.todos = [];
//   }
// }

class Project {
  constructor(name) {
    this.id = arrayProjects.length + 1;
    this.name = name;
    this.todos = [];
    return arrayProjects.push({ id: this.id, name: this.name, todos: this.todos });
  }
}

let project = new Project("Demo");

// }

class TodosProject {
  constructor(title, description, dueDate, priority, status, todos) {
    this.id = todos.length + 1;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    return todos.push({
      id: this.id,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      status: this.status,
    });
  }
}

let newTodo = new TodosProject(
  "Importante",
  "Primera descripción",
  "28/09/2024",
  "Bajo",
  "Doing",
  project.todos
);

console.log(newTodo);

console.log(arrayProjects);
