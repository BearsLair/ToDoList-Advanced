import { newProjectModal, allProjects, currentViewedProject } from "./projects";
import "./styles.css";

const newProject = document.querySelector("#newProject");

newProject.addEventListener("click", () => {
  console.log("Current Projects before new one: ", allProjects);
  console.log("Currently viewed project: ", currentViewedProject);
  newProjectModal();
});
