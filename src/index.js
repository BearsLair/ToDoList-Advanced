import { newProjectModal, allProjects, currentViewedProject } from "./projects";
import { newTaskModal } from "./todos";
import "./styles.css";

const newProject = document.querySelector("#newProject");
const newTask = document.querySelector("#newTask");

newProject.addEventListener("click", () => {
  console.log("Current Projects before new one: ", allProjects);
  console.log("Currently viewed project: ", currentViewedProject);
  newProjectModal();
});

newTask.addEventListener("click", () => {
  newTaskModal();
});
