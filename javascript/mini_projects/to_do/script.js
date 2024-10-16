// Get DOM elements
const taskInput = document.getElementById('task');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoList = document.getElementById('todoList');

// Event listener to add a task
addTaskBtn.addEventListener('click', addTask);

// Function to add a task
function addTask() {
    const task = taskInput.value.trim();

    if (task !== '') {
        const li = document.createElement('li');

        // Create task text element
        const taskText = document.createElement('span');
        taskText.textContent = task;
        taskText.addEventListener('click', () => toggleComplete(taskText));

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => deleteTask(li));

        // Append text and button to list item
        li.appendChild(taskText);
        li.appendChild(deleteBtn);

        // Add the list item to the todo list
        todoList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}

// Function to delete a task
function deleteTask(taskItem) {
    todoList.removeChild(taskItem);
}

// Function to mark task as completed
function toggleComplete(taskText) {
    taskText.classList.toggle('completed');
}
