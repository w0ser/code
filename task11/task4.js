const createTaskForm = document.querySelector('.createtask-block');
const tasksList = document.querySelector('.tasks-list');
const inputField = document.querySelector('.create-task-block input');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTaskToDOM(task) {
    const taskItem = document.createElement('li');
    taskItem.textContent = task.text;
    tasksList.appendChild(taskItem);
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function showError(message) {
    const errorBlock = document.querySelector('.error-message-block');
    if (errorBlock) {
        errorBlock.remove();
    }
    
    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-message-block';
    errorSpan.textContent = message;
    
    createTaskForm.appendChild(errorSpan);
}

createTaskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskText = inputField.value.trim();
    
    if (!taskText) {
        showError('Название задачи не должно быть пустым');
        return;
    }
    
    if (tasks.some(task => task.text === taskText)) {
        showError('Задача с таким названием уже существует');
        return;
    }
    
    const newTask = {
        id: Date.now(),
        text: taskText
    };
    
    tasks.push(newTask);
    addTaskToDOM(newTask);
    saveTasks();
    
    inputField.value = '';
    
    const errorBlock = document.querySelector('.error-message-block');
    if (errorBlock) {
        errorBlock.remove();
    }
});