import { allProjects, currentViewedProject, newProjectModal } from "./projects";

const navBar = document.querySelector("nav");
navBar.classList.add("nav-bar");
// const mainContent = document.querySelector(".maincontent");

const newUser = () => {
  const newProjectBtn = document.createElement("button");
  navBar.appendChild(newProjectBtn);
  newProjectBtn.textContent = "New Project...";
  newProjectBtn.classList.add("nav-button");

  newProjectBtn.addEventListener("click", () => {
    console.log("Current Projects before new one: ", allProjects);
    console.log("Currently viewed project: ", currentViewedProject);
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
  });

  newUser();
};

const displayCurrentTasks = () => {};

export { newUser, displayProjects };
