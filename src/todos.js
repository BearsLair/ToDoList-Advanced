// Instantiates a new project that will include list of todos
// Method to change the project title is included
// Method to add todos to a project is also present
class project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
    this.currentToDos = [];
  }

  change(newTitle) {
    this.projectTitle = newTitle;
  }

  addTodo(newToDo) {
    this.currentToDos.push(newToDo);
  }
}

// Creates new to-do item with title, description, due date, and notes
// Methods are included to change elements of the to-do items
const createNewTask = (todoTitle, description, dueDate, notes) => {
  class task {
    constructor(todoTitle, description, dueDate, notes) {
      this.todoTitle = todoTitle;
      this.description = description;
      this.dueDate = dueDate;
      this.notes = notes;
      this.checked = false;
    }

    changeTitle(newTitle) {
      this.todoTitle = newTitle;
    }

    changeDesc(newDesc) {
      this.description = newDesc;
    }

    changeDueDate(newDueDate) {
      this.dueDate = newDueDate;
    }

    changeNotes(newNotes) {
      this.notes = newNotes;
    }

    changeCheck(change) {
      this.checked = change;
    }
  }
};
