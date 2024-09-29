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
      editTodo(todoId, updatedTodo) {
        const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);
        if (todoIndex !== -1) {
          this.todos[todoIndex] = { ...this.todos[todoIndex], ...updatedTodo };
          return true;
        }
        return false;
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

function createProject(nameProject) {
  let newProject = new Project(nameProject);
  arrayProjects.push(newProject);
  return newProject;
}

function createTodo(title, description, dueDate, priority, status) {
  let newTodo = new TodosProject(title, description, dueDate, priority, status);
  return newTodo;
}

function addTodoToProject(project, todo) {
  project.addTodo(todo);
}

function editTodoInProject(
  projectId,
  todoId,
  title,
  description,
  priority,
  status
) {
  const project = arrayProjects.find((proj) => proj.id === projectId);
  if (project) {
    return project.editTodo(todoId, {
      title: title,
      description: description,
      priority: priority,
      status: status,
    });
  }
  return false;
}

const project = createProject("Comodin");
const todo = createTodo(
  "Let's check",
  "See if this works",
  "29/09/2024",
  "Medium",
  "Doing"
);
addTodoToProject(project, todo);

editTodoInProject(project.id, todo.id, "OK", "Nuevo contenido", "Alta", "Done");

console.log(arrayProjects);

export {
  arrayProjects,
  Project,
  TodosProject,
  createProject,
  createTodo,
  addTodoToProject,
};
