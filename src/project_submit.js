const submitProjectModal = () => {
  const modalDiv = document.querySelector(".modal-div");
  const modal = document.createElement("dialog");
  modalDiv.appendChild(modal);

  const desc = document.createElement("p");
  modal.appendChild(desc);
  desc.textContent = "New Project Name:";
  desc.classList.add("modal-textprompt");

  const userInput = document.createElement("input");
  modal.appendChild(userInput);
  userInput.classList.add("modal-userinput");

  const submitBtn = document.createElement("button");
  modal.appendChild(submitBtn);
  submitBtn.classList.add("submitBtn");
  submitBtn.textContent = "Submit";
};

export default submitProjectModal;
