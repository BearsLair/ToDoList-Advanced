import { allProjects, currentViewedProject, newProjectModal } from "./projects";
import { newTaskModal } from "./todos";

const navBar = document.querySelector("nav");

const submitTaskBtn = document.createElement("button");
submitTaskBtn.classList.add("submitnewtaskBtn");
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
    projectTab.id = project.projectTitle;
    projectTab.classList.add("nav-button");

    selectedProjectTasks.innerHTML = "";

    projectTab.addEventListener("click", () => {
      project.makeCurrentProject();

      displayToDos();
    });
  });

  displayToDos();

  newUser();
};

const displayToDos = () => {
  selectedProjectTasks.innerHTML = "";
  let projectIndex = -1;

  projectIndex = allProjects.findIndex(
    (project) => project.projectTitle === currentViewedProject
  );

  if (allProjects[projectIndex].currentToDos.length > 0) {
    allProjects[projectIndex].currentToDos.map((task) => {
      const taskDiv = document.createElement("div");
      selectedProjectTasks.appendChild(taskDiv);
      taskDiv.classList.add("task-div");
      taskDiv.id = `${allProjects[projectIndex].currentToDos.indexOf(task)}`;

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
        allProjects[projectIndex].currentToDos[taskDiv.id].changeCheck();

        displayToDos();
      });

      const deleteBtn = document.createElement("button");
      taskDiv.appendChild(deleteBtn);
      deleteBtn.textContent = "X";
      deleteBtn.classList.add("taskElement");
      deleteBtn.addEventListener("click", () => {
        allProjects[projectIndex].deleteToDo(taskDiv.id);

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
