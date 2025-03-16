const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTaskToList(taskText);
        taskInput.value = '';
    }
});

function addTaskToList(taskText) {
    const li = document.createElement('li');
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');

    li.appendChild(taskContent);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskContent.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
}

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTaskBtn.click();
    }
});