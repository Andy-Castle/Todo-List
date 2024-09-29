// export default function project() {
let arrayProjects = [];

// class Project {
//   constructor(name) {
//     this.id = arrayProjects.length += 1;
//     this.name = name;
//     this.todos = [];
//   }
// }

function Project(name) {
  this.id = arrayProjects.length + 1;
  this.name = name;
  this.todos = [];
  return arrayProjects.push({ id: this.id, name: this.name, todos: this.todos });
}

let project = new Project("Demo");
let projects = new Project("Demo");
let projectss = new Project("Demo");

console.log(arrayProjects);
// }
