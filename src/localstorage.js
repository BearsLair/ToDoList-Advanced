import { allProjects } from "./projects";

const saveData = () => {
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
}

const getData = () => {
    if (allProjects) {
        allProjects = JSON.parse('allProjects');
    }
}

const clearData = () => {
    localStorage.clear();
}

export {saveData, getData, clearData};