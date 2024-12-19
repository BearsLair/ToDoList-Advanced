import { Project, Task } from "./todos";
import submitProjectModal from "./project_submit";
import "./styles.css";

let allProjects = [];
let currentViewedProject = null;

const newProject = document.querySelector("#newProject");

newProject.addEventListener("click", () => {
  submitProjectModal();
});
