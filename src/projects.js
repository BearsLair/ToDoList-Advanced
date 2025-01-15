import { saveData } from "./localstorage";
// Module for creating new projects via a Javascript class and modal

import { displayProjects } from "./display";

let allProjects = [];
let currentViewedProject = null;

// Instantiates a new project that will include list of todos
// Method to change the project title is included
// Methods to add/delete todos to a project is also present
// To-dos for a project are stored as objects in currentToDos array
class Project {
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

  deleteToDo(index) {
    this.currentToDos.splice(index, 1);
  }

  makeCurrentProject() {
    currentViewedProject = this.projectTitle;
  }
}

//Constructs new project dialog box
const newProjectModal = () => {
  const modalDiv = document.querySelector(".modal-div");
  modalDiv.innerHTML = "";
  modalDiv.style.display = "flex";

  const desc = document.createElement("p");
  modalDiv.appendChild(desc);
  desc.textContent = "New Project Name:";
  desc.classList.add("modal-textprompt");

  const userInput = document.createElement("input");
  modalDiv.appendChild(userInput);
  userInput.classList.add("modal-userinput");

  const submitBtn = document.createElement("button");
  modalDiv.appendChild(submitBtn);
  submitBtn.classList.add("submitBtn");
  submitBtn.textContent = "Submit";

  submitBtn.addEventListener("click", () => {
    let project = new Project(userInput.value);
    allProjects.push(project);
    project.makeCurrentProject();
    if (allProjects.length > 0) {
      saveData();
      displayProjects();
    }
    modalDiv.style.display = "none";
  });

  const cancelModal = document.createElement("button");
  modalDiv.appendChild(cancelModal);
  cancelModal.classList.add("submitBtn");
  cancelModal.textContent = "Cancel Project Submit";

  cancelModal.addEventListener("click", () => {
    modalDiv.style.display = "none";
  });
};

export { newProjectModal, allProjects, currentViewedProject };
