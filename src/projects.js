let allProjects = [];
let currentViewedProject = null;

const newProjectModal = () => {
  const modalDiv = document.querySelector(".modal-div");
  modalDiv.style.display = "block";

  const desc = document.createElement("p");
  modalDiv.appendChild(desc);
  desc.textContent = "New Project Name:";
  desc.classList.add("modal-textprompt");

  const userInput = document.createElement("input");
  modalDiv.appendChild(userInput);
  userInput.classList.add("modal-userinput");

  const projectSubmitBtn = document.createElement("button");
  modalDiv.appendChild(projectSubmitBtn);
  projectSubmitBtn.classList.add("submitBtn");
  projectSubmitBtn.textContent = "Submit";

  projectSubmitBtn.addEventListener("click", () => {
    allProjects.push(userInput.textContent);
    console.log(allProjects);
    modalDiv.style.display = "none";
  });
};

const projectSubmit = () => {
  allProjects.push(userInput.textContent);
  console.log(allProjects);
  modalDiv.style.display = "none";
};

export { newProjectModal, projectSubmit };
