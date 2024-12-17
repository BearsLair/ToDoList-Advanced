class project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
  }

  change(newTitle) {
    this.projectTitle = newTitle;
  }
}

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
}
