let arrayProjects = [];

class Project {
  static id = 0;
  constructor(name) {
    this.id = ++Project.id;
    this.name = name;
    this.todos = [];

    return {
      id: this.id,
      name: this.name,
      todos: this.todos,
      addTodo(todo) {
        this.todos.push(todo);
      },
    };
  }
}

class TodosProject {
  static id = 0;
  constructor(title, description, dueDate, priority, status) {
    this.id = ++TodosProject.id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;

    return {
      id: this.id,
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      status: this.status,
    };
  }
}

let project = new Project("Default");

let todo = new TodosProject(
  "Add a list",
  "First description",
  "28/09/2024",
  "Low",
  "To Do"
);

arrayProjects.push(project);

project.addTodo(todo);

console.log(arrayProjects);

export { arrayProjects, Project, TodosProject };
