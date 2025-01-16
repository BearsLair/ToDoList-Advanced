const saveData = (data) => {
  localStorage.setItem("savedData", JSON.stringify(data));
};

const getData = () => {
  return JSON.parse(localStorage.getItem("savedData"));
};

const clearData = () => {
  localStorage.clear();
};

export { saveData, getData, clearData };
