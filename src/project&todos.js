let arrayProjects = [];

class Project {
  constructor(name) {
    this.id = arrayProjects.length + 1;
    this.name = name;
    this.todos = [];
    return arrayProjects.push({ id: this.id, name: this.name, todos: this.todos });
  }
}

class TodosProject extends Project {
  constructor(title, description, dueDate, priority, status, todos) {
    super(todos);
    this.id = this.todos.length + 1;
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

new Project("Demo");
new Project("Default");

new TodosProject(
  "Importante",
  "Primera descripción",
  "28/09/2024",
  "Low",
  "To Do"
);

console.log(arrayProjects);

function buscarObjeto(name) {
  return arrayProjects.find((n) => n.name == name);
}

console.log(buscarObjeto("Demo").todos);
export { arrayProjects, Project, TodosProject };
