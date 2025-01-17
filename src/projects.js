import { saveData, clearData, getData } from "./localstorage";
// Module for creating new projects via a Javascript class and modal

import { displayProjects } from "./display";

let allProjects = [];
let currentViewedProject = null;

const retrieveData = () => {
  allProjects = getData();
};

const startProject = () => {
  if (allProjects.length > 0) {
    currentViewedProject = allProjects[0].projectTitle;
  } else {
    currentViewedProject = null;
  }
};

const makeCurrentProject = (project) => {
  currentViewedProject = project;
};

const changeCheck = (projectIndex, id) => {
  if (allProjects[projectIndex].currentToDos[id].checked === false) {
    allProjects[projectIndex].currentToDos[id].checked = true;
  } else if (allProjects[projectIndex].currentToDos[id].checked === true) {
    allProjects[projectIndex].currentToDos[id].checked = false;
  }
};

const addTodo = (index, newTask) => {
  allProjects[index].currentToDos.push(newTask);
};

const deleteTodo = (projectIndex, id) => {
  allProjects[projectIndex].currentToDos.splice(id, 1);
};

const deleteProject = () => {
  let projectIndex = allProjects.findIndex(
    (project) => project.projectTitle === currentViewedProject
  );

  allProjects.splice(projectIndex, 1);

  if (allProjects.length > 0) {
    currentViewedProject = allProjects[0].projectTitle;
    clearData();
    saveData();
  } else {
    currentViewedProject = null;
    clearData();
  }
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
      makeCurrentProject(project.projectTitle);
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
  addTodo,
  deleteProject,
};
