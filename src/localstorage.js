import { allProjects } from "./projects";

const saveData = () => {
    localStorage.setItem('allProjects', allProjects);
}

const getData = () => {
        allProjects = localStorage.getItem("allProjects");
}

const clearData = () => {
    localStorage.clear();
}

export {saveData, getData, clearData};