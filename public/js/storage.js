const STORAGE_KEY = 'todo-tasks';

export function saveTask(task){
    const tasks = getTasks();
    tasks.push(task);
    localStorage.setItem(STORAGE_KEY,JSON.stringify(tasks));
}

export function getTasks(){
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function deleteTask(){
    localStorage.setItem(STORAGE_KEY,JSON.stringify([]));
}