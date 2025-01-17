import {
  allProjects,
  currentViewedProject,
  newProjectModal,
  retrieveData,
  startProject,
  makeCurrentProject,
  changeCheck,
  deleteTodo,
  deleteProject,
} from "./projects";
import { newTaskModal } from "./todos";
import { saveData, clearData, getData } from "./localstorage";

const navBar = document.querySelector("nav");

const submitTaskBtn = document.createElement("button");
submitTaskBtn.classList.add("submitnewtaskBtn");
const selectedProjectTasks = document.querySelector(".main-content");

const newUser = () => {
  if (localStorage.getItem("savedData") !== null) {
    retrieveData();
    startProject();
    displayProjects();
    displayToDos();
  } else if (localStorage.getItem("savedData") === null) {
    const newProjectBtn = document.createElement("button");
    navBar.appendChild(newProjectBtn);
    newProjectBtn.textContent = "New Project...";
    newProjectBtn.classList.add("nav-button");

    newProjectBtn.addEventListener("click", () => {
      newProjectModal();
    });
  }
};

const displayProjects = () => {
  navBar.innerHTML = "";

  allProjects.map((project) => {
    const projectTab = document.createElement("button");
    navBar.appendChild(projectTab);
    projectTab.textContent = project.projectTitle;
    projectTab.id = project.projectTitle;
    projectTab.classList.add("nav-button");

    selectedProjectTasks.innerHTML = "";

    projectTab.addEventListener("click", () => {
      makeCurrentProject(project.projectTitle);
      displayToDos();
    });
  });

  const newProjectBtn = document.createElement("button");
  navBar.appendChild(newProjectBtn);
  newProjectBtn.textContent = "New Project...";
  newProjectBtn.classList.add("nav-button");

  newProjectBtn.addEventListener("click", () => {
    newProjectModal();
  });

  const deleteProjectBtn = document.createElement("button");
  navBar.appendChild(deleteProjectBtn);
  deleteProjectBtn.textContent = "Delete Current Project...";
  deleteProjectBtn.classList.add("deleteProjectBtn");
  deleteProjectBtn.addEventListener("click", () => {
    deleteProject();
    if (allProjects.length > 0) {
      startProject();
      displayProjects();
    } else {
      selectedProjectTasks.innerHTML = "";
      navBar.innerHTML = "";
      newUser();
    }
  });

  console.log(currentViewedProject);
  console.log(allProjects);
  // This changed
  const todoListIndex = allProjects.findIndex(
    (project) => project.projectTitle === currentViewedProject
  );

  console.log(todoListIndex);
  if (
    allProjects.length !== 0 &&
    allProjects[todoListIndex].currentToDos.length !== 0
  ) {
    displayToDos();
  }
  ///////////////
};

const displayToDos = () => {
  selectedProjectTasks.innerHTML = "";

  let projectIndex = allProjects.findIndex((project) => {
    return project.projectTitle === currentViewedProject;
  });
  if (allProjects[projectIndex].currentToDos.length > 0) {
    allProjects[projectIndex].currentToDos.map((task) => {
      const taskDiv = document.createElement("div");
      selectedProjectTasks.appendChild(taskDiv);
      taskDiv.classList.add("task-div");
      taskDiv.id = `${allProjects[projectIndex].currentToDos.indexOf(task)}`;
      let id = taskDiv.id;

      const title = document.createElement("p");
      taskDiv.appendChild(title);
      title.textContent = task.todoTitle;
      title.classList.add("taskElement");

      const description = document.createElement("p");
      taskDiv.appendChild(description);
      description.textContent = task.description;
      description.classList.add("taskElement");

      const dueDate = document.createElement("p");
      taskDiv.appendChild(dueDate);
      dueDate.textContent = task.dueDate;
      dueDate.classList.add("taskElement");

      const notes = document.createElement("p");
      taskDiv.appendChild(notes);
      notes.textContent = task.notes;
      notes.classList.add("taskElement");

      const checked = document.createElement("input");
      taskDiv.appendChild(checked);
      checked.type = "checkbox";
      checked.classList.add("taskElement");
      checked.id = taskDiv.id;

      if (allProjects[projectIndex].currentToDos[taskDiv.id].checked === true) {
        checked.checked = true;
      } else {
        checked.checked = false;
      }

      checked.addEventListener("click", () => {
        changeCheck(projectIndex, id);
        // Test
        clearData();
        saveData(allProjects);
        displayToDos();
      });

      const deleteBtn = document.createElement("button");
      taskDiv.appendChild(deleteBtn);
      deleteBtn.textContent = "X";
      deleteBtn.classList.add("taskElement");
      deleteBtn.addEventListener("click", () => {
        deleteTodo(projectIndex, id);
        clearData();
        saveData(allProjects);
        displayToDos();
      });
    });

    selectedProjectTasks.appendChild(submitTaskBtn);
    submitTaskBtn.textContent = "Submit New To-Do...";
    submitTaskBtn.addEventListener("click", () => {
      newTaskModal();
    });
  } else if (allProjects[projectIndex].currentToDos.length === 0) {
    selectedProjectTasks.appendChild(submitTaskBtn);
    submitTaskBtn.textContent = "Submit New To-Do...";
    submitTaskBtn.addEventListener("click", () => {
      newTaskModal();
    });
  }
};

export { newUser, displayProjects, displayToDos };
