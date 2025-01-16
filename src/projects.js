import { saveData, clearData, getData } from "./localstorage";
// Module for creating new projects via a Javascript class and modal

import { displayProjects } from "./display";

let allProjects = [];
let currentViewedProject = null;

const retrieveData = () => {
  allProjects = getData();
};

const startProject = () => {
  currentViewedProject = allProjects[0].projectTitle;
};

const makeCurrentProject = (project) => {
  currentViewedProject = project.projectTitle;
};

const changeCheck = (projectIndex, id) => {
  console.log("check should be changing...");
  if (allProjects[projectIndex].currentToDos[id].checked === false) {
    console.log("change check should be executing");
    allProjects[projectIndex].currentToDos[id].checked = true;
  } else if (allProjects[projectIndex].currentToDos[id].checked === true) {
    allProjects[projectIndex].currentToDos[id].checked = false;
  }
};

const deleteTodo = (projectIndex, id) => {
  allProjects[projectIndex].currentToDos.splice(id, 1);
};

// Instantiates a new project that will include list of todos
// Method to change the project title is included
// Methods to add/delete todos to a project is also present
// To-dos for a project are stored as objects in currentToDos array
class Project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
    this.currentToDos = [];
  }

  addTodo(newToDo) {
    this.currentToDos.push(newToDo);
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
    makeCurrentProject(project);
    if (allProjects.length > 0) {
      clearData();
      saveData(allProjects);
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

export {
  newProjectModal,
  allProjects,
  currentViewedProject,
  retrieveData,
  startProject,
  makeCurrentProject,
  changeCheck,
  deleteTodo,
};
