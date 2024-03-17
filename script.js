// Get references to HTML elements
const todoList = document.getElementById('todoList');
const newTodoInput = document.getElementById('newTodo');
const addBtn = document.getElementById('addBtn');

// Function to add a new todo item
function addTodo() {
    // Get the value of the input field
    const newTodoText = newTodoInput.value;
    // Clear the input field
    newTodoInput.value = '';

    // Create new elements for the todo item
    const listItem = document.createElement('li');
    const todoText = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const completeCheckbox = document.createElement('input');

    // Set checkbox type to checkbox
    completeCheckbox.type = 'checkbox';

    // Append text, checkbox, and delete button to list item
    listItem.appendChild(completeCheckbox);
    listItem.appendChild(todoText);
    listItem.appendChild(deleteBtn);

    // Set text content of todo item and delete button
    todoText.textContent = newTodoText;
    deleteBtn.textContent = 'Delete';

    // Append list item to todo list
    todoList.appendChild(listItem);

    // Attach event listener to delete button
    deleteBtn.addEventListener('click', function () {
        // Remove the parent list item when delete button is clicked
        todoList.removeChild(listItem);
    });

    // Attach event listener to checkbox to mark as completed
    completeCheckbox.addEventListener('change', function () {
        if (completeCheckbox.checked) {
            // Add completed class for styling
            listItem.classList.add('completed');
        } else {
            // Remove completed class
            listItem.classList.remove('completed');
        }
    });

    // Set focus back to input field
    newTodoInput.focus();
}

// Attach click event listener to add button
addBtn.addEventListener('click', addTodo);
