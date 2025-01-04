import { newProjectModal, allProjects, currentViewedProject } from "./projects";
import { newTaskModal } from "./todos";
import { newUser } from "./display";
import "./styles.css";

if (allProjects.length === 0) {
  newUser();
}

// newTask.addEventListener("click", () => {
//   newTaskModal();
// });
