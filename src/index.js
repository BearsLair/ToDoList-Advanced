import { Project, Task } from "./todos";
import { newProjectModal, projectSubmit } from "./projects";
import "./styles.css";

const newProject = document.querySelector("#newProject");

newProject.addEventListener("click", () => {
  newProjectModal();
});
