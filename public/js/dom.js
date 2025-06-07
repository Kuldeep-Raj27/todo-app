import { saveTask, getTasks, deleteTask} from 'storage.js';

const clearButton = document.getElementById('clear_button');
clearButton.addEventListener('click',()=>{
    deleteTask();
    document.getElementById('task-list').innerHTML = '';
} );

export function addTaskListener(){
    const form = document.getElementById('task-form');
    const input = document.getElementById('task-input');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const text= input.value.trim();
        if(text !== ''){
            const task = {text, id:Date.now()};
            renderTask(task);
            saveTask(task);
            input.value = '';
        }
    });
}

export function loadTask(){
    const tasks= getTasks();
    tasks.forEach(renderTask);
}

function renderTask(task){
    const list = document.getElementById('task-list');
    const item = document.createElement('li');
    item.textContent = task.text;
    // item.innerHTML = task.text;
    item.id = `task-${task.id}`;
    list.appendChild(item);
}