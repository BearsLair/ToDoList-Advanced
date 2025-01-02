// Instantiates a new project that will include list of todos
// Method to change the project title is included
// Method to add/delete todos to a project is also present
class Project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
    this.currentToDos = [];
  }

  change(newTitle) {
    this.projectTitle = newTitle;
  }

  addTodo(newToDo) {
    this.currentToDos.push(newToDo);
  }

  deleteTodo(index) {
    this.currentToDos.splice(index, index + 1);
  }
}

let allProjects = [];
let currentViewedProject = null;

//Constructs new project dialog box
const newProjectModal = () => {
  const modalDiv = document.querySelector(".modal-div");
  modalDiv.innerHTML = "";
  modalDiv.style.display = "block";

  const desc = document.createElement("p");
  modalDiv.appendChild(desc);
  desc.textContent = "New Project Name:";
  desc.classList.add("modal-textprompt");

  const userInput = document.createElement("input");
  modalDiv.appendChild(userInput);
  userInput.classList.add("modal-userinput");

  const submitBtn = document.createElement("button");
  modalDiv.appendChild(projectSubmitBtn);
  submitBtn.classList.add("submitBtn");
  submitBtn.textContent = "Submit";

  submitBtn.addEventListener("click", () => {
    let project = new Project(userInput.value);
    allProjects.push(project);
    currentViewedProject = project.projectTitle;
    console.log(allProjects);
    modalDiv.style.display = "none";
  });
};

export { newProjectModal, allProjects, currentViewedProject };
