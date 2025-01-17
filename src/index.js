import { newUser } from "./display";
import { clearData, saveData } from "./localstorage";
import "./styles.css";

clearData();

const testContent = [
  {
    projectTitle: "A",
    currentToDos: [
      {
        todoTitle: "a",
        description: "b",
        dueDate: "2025-01-17",
        notes: "c",
        checked: false,
      },
      {
        todoTitle: "d",
        description: "e",
        dueDate: "2025-01-18",
        notes: "f",
        checked: false,
      },
      {
        todoTitle: "g",
        description: "h",
        dueDate: "2025-01-19",
        notes: "i",
        checked: false,
      },
    ],
  },
  {
    projectTitle: "B",
    currentToDos: [
      {
        todoTitle: "m",
        description: "n",
        dueDate: "2025-01-27",
        notes: "o",
        checked: false,
      },
      {
        todoTitle: "p",
        description: "q",
        dueDate: "2025-01-21",
        notes: "r",
        checked: false,
      },
    ],
  },
  {
    projectTitle: "C",
    currentToDos: [
      {
        todoTitle: "s",
        description: "t",
        dueDate: "",
        notes: "u",
        checked: false,
      },
    ],
  },
];

saveData(testContent);

newUser();
