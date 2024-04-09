const tasks = [
    {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
    },
    {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
    },
    {
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
    },
    ]

const tasksList = document.querySelector('.tasks-list');

tasks.forEach(task => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.dataset.taskId = task.id;

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('task-item__main-container');

    const mainContent = document.createElement('div');
    mainContent.classList.add('task-item__main-content');

    const checkboxForm = document.createElement('form');
    checkboxForm.classList.add('checkbox-form');

    const checkboxInput = document.createElement('input');
    checkboxInput.classList.add('checkbox-form__checkbox');
    checkboxInput.type = 'checkbox';
    checkboxInput.id = `task\-$\{task\.id\}`;

    const checkboxLabel = document.createElement('label');
    checkboxLabel.htmlFor = `task\-$\{task\.id\}`;

    const taskText = document.createElement('span');
    taskText.classList.add('task-item__text');
    taskText.textContent = task.text;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('task-item__delete-button', 'default-button', 'delete-button');
    deleteButton.dataset.deleteTaskId = task.id;
    deleteButton.textContent = 'Удалить';

    checkboxForm.appendChild(checkboxInput);
    checkboxForm.appendChild(checkboxLabel);

    mainContent.appendChild(checkboxForm);
    mainContent.appendChild(taskText);

    mainContainer.appendChild(mainContent);
    mainContainer.appendChild(deleteButton);

    taskItem.appendChild(mainContainer);

    tasksList.appendChild(taskItem);
});