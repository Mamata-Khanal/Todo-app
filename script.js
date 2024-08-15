
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {

    // Get references to the input field, button, and task list
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    // Function to add a task to the list
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if the task input is empty
        if (taskText === "") {
            alert("The task field cannot be empty!");
            return;
        }

        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Optional: Add a delete button for each task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(deleteButton);

        // Add the task to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Event listener for the 'Add Task' button
    addTaskButton.addEventListener('click', addTask);

    // Optional: Allow pressing "Enter" to add a task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
