class project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
  }

  change(newTitle) {
    this.projectTitle = newTitle;
  }
}

class task {
  constructor(todoTitle, description, dueDate, notes, checked) {
    this.todoTitle = todoTitle;
    this.description = description;
    this.dueDate = dueDate;
    this.notes = notes;
    this.checked = checked;
  }

  change(newTitle) {
    this.todoTitle = newTitle;
  }
}
