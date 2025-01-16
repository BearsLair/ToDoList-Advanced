// Module for creating new to-dos for each user-created project
// via a Javascript class and modal

import { displayToDos } from "./display";
import { clearData, saveData } from "./localstorage";
import { allProjects, currentViewedProject } from "./projects";

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
}

// Creates dialog box for user to enter new to-do within a project
const newTaskModal = () => {
  const modalDiv = document.querySelector(".modal-div");
  modalDiv.innerHTML = "";
  modalDiv.style.display = "flex";

  // Modal label
  const taskTitle = document.createElement("p");
  modalDiv.appendChild(taskTitle);
  taskTitle.textContent = "New Task:";
  taskTitle.classList.add("task-title");

  // Div container for to do elements
  const taskDiv = document.createElement("div");
  modalDiv.appendChild(taskDiv);
  taskDiv.classList.add("task-criteria");

  // Name of todo
  const taskName = document.createElement("div");
  taskDiv.appendChild(taskName);
  taskName.classList.add("task-element");

  const nameLabel = document.createElement("p");
  taskName.appendChild(nameLabel);
  nameLabel.textContent = "To Do Task:";
  nameLabel.classList.add("task-label");

  const nameInput = document.createElement("input");
  taskName.appendChild(nameInput);
  nameInput.classList.add("task-input");

  // Description for todo
  const taskDesc = document.createElement("div");
  taskDiv.appendChild(taskDesc);
  taskDesc.classList.add("task-element");

  const descLabel = document.createElement("p");
  taskDesc.appendChild(descLabel);
  descLabel.textContent = "Description";
  descLabel.classList.add("task-label");

  const descInput = document.createElement("input");
  taskDesc.appendChild(descInput);
  descInput.classList.add("task-input");

  // Due date for todo
  const taskDate = document.createElement("div");
  taskDiv.appendChild(taskDate);
  taskDate.classList.add("task-element");

  const dateLabel = document.createElement("p");
  taskDate.appendChild(dateLabel);
  dateLabel.textContent = "Due Date";
  dateLabel.classList.add("task-label");

  const dateInput = document.createElement("input");
  taskDate.appendChild(dateInput);
  dateInput.classList.add("task-input");
  dateInput.type = "date";

  // Notes for todo
  const taskNotes = document.createElement("div");
  taskDiv.appendChild(taskNotes);
  taskNotes.classList.add("task-element");

  const notesLabel = document.createElement("p");
  taskNotes.appendChild(notesLabel);
  notesLabel.textContent = "Notes:";
  notesLabel.classList.add("task-label");

  const notesInput = document.createElement("input");
  taskNotes.appendChild(notesInput);
  notesInput.classList.add("task-input");

  const submitBtn = document.createElement("button");
  modalDiv.appendChild(submitBtn);
  submitBtn.classList.add("submitBtn");
  submitBtn.textContent = "Submit";

  // Submit button for todos modal
  // Inserts new to-do object into the current project's currentToDos array
  submitBtn.addEventListener("click", () => {
    let todoTitle = nameInput.value;
    let description = descInput.value;
    let dueDate = dateInput.value;
    let notes = notesInput.value;
    let index = -1;
    let newTask = new Task(todoTitle, description, dueDate, notes);

    index = allProjects.findIndex(
      (project) => project.projectTitle === currentViewedProject
    );

    allProjects[index].addTodo(newTask);
    clearData();
    saveData(allProjects);
    displayToDos();
    modalDiv.style.display = "none";
  });

  const cancelModal = document.createElement("button");
  modalDiv.appendChild(cancelModal);
  cancelModal.classList.add("submitBtn");
  cancelModal.textContent = "Cancel Submit Task";

  cancelModal.addEventListener("click", () => {
    modalDiv.style.display = "none";
  });
};

export { newTaskModal };
