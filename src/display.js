import { allProjects, currentViewedProject, newProjectModal } from "./projects";
import { newTaskModal } from "./todos";

const navBar = document.querySelector("nav");
navBar.classList.add("nav-bar");

const submitTaskBtn = document.createElement("button");
const selectedProjectTasks = document.querySelector(".main-content");

const newUser = () => {
  const newProjectBtn = document.createElement("button");
  navBar.appendChild(newProjectBtn);
  newProjectBtn.textContent = "New Project...";
  newProjectBtn.classList.add("nav-button");

  newProjectBtn.addEventListener("click", () => {
    newProjectModal();
  });
};

const displayProjects = () => {
  navBar.innerHTML = "";

  allProjects.map((project) => {
    const projectTab = document.createElement("button");
    navBar.appendChild(projectTab);
    projectTab.textContent = project.projectTitle;
    projectTab.id = `${project.projecTitle}`;

    selectedProjectTasks.innerHTML = "";

    projectTab.addEventListener("click", () => {
      project.makeCurrentProject();
      console.log(currentViewedProject);

      displayToDos();
    });
  });

  displayToDos();

  newUser();
};

const displayToDos = () => {
  selectedProjectTasks.innerHTML = "";
  console.log("displayToDos code running");
  let taskIndex = -1;

  taskIndex = allProjects.findIndex(
    (project) => project.projectTitle === currentViewedProject
  );

  console.log("Current taskIndex: ", taskIndex);

  if (allProjects[taskIndex].currentToDos.length > 0) {
    allProjects[taskIndex].currentToDos.map((task) => {
      const taskDiv = document.createElement("div");
      selectedProjectTasks.appendChild(taskDiv);
      taskDiv.classList.add("task-div");

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
      if (checked === true) {
        checked.checked = true;
      } else if (checked === false) {
        checked.checked = false;
      }
      checked.classList.add("taskElement");

      const deleteBtn = document.createElement("button");
      taskDiv.appendChild(deleteBtn);
      deleteBtn.textContent = "X";
      deleteBtn.classList.add("taskElement");
      deleteBtn.addEventListener("click", () => {});
    });

    selectedProjectTasks.appendChild(submitTaskBtn);
    submitTaskBtn.textContent = "Submit New To-Do...";
    submitTaskBtn.addEventListener("click", () => {
      newTaskModal();
    });
  } else if (allProjects[taskIndex].currentToDos.length === 0) {
    selectedProjectTasks.appendChild(submitTaskBtn);
    submitTaskBtn.textContent = "Submit New To-Do...";
    submitTaskBtn.addEventListener("click", () => {
      newTaskModal();
    });
  }
};

export { newUser, displayProjects, displayToDos };
