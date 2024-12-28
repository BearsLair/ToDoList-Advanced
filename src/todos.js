// Creates new to-do item with title, description, due date, and notes
// Methods are included to change elements of the to-do items
class Task {
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

export { Project, Task };
