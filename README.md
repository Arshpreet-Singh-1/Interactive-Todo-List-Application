# Interactive Todo List Application

## Introduction

Welcome to the Interactive Todo List Application! This project allows you to create and manage your tasks dynamically. With this app, you can easily add new tasks, mark them as completed, and delete them when they're done. The intuitive interface makes it simple to stay organized and focused on your goals.

---

## Project Description

The Interactive Todo List Application is a web-based task management tool designed to help users organize their tasks effectively. With this application, users can add, delete, and mark tasks as completed in real-time, providing a seamless and intuitive task management experience.

![image](https://github.com/Arshpreet-Singh-1/Interactive-Todo-List-Application/assets/84027648/cd2b50d7-afd5-4579-b494-e5c141e9b64b)

---

## Tech Stack

- **HTML:** Used for creating the structure of the web page.
- **CSS:** Employed for styling the user interface and enhancing visual appeal.
- **JavaScript:** Utilized for implementing dynamic functionality, such as adding, deleting, and marking tasks as completed.

---

## Learning Outcome

- Gain proficiency in DOM manipulation techniques using JavaScript.
- Understand event handling and how to attach event listeners to HTML elements.
- Learn how to create interactive and dynamic web applications.
- Practice implementing basic task management functionality, such as adding, deleting, and marking tasks as completed.
- Enhance problem-solving skills through project-based learning and troubleshooting.

---

## Instructions

### Setup

 - **Begin with an HTML file (`index.html`):** Create the foundation of your todo list app.
 - **Create a basic CSS file (`style.css`):** Style the todo list elements.
 - **Set up the HTML structure:** Include a heading, input field for adding tasks, an add button, and an empty unordered list (`<ul>`).

### Variables

 - **Create variables:** Within the JavaScript file (`script.js`), reference the todo list (`<ul>`), input field, and add button elements.

### Add Todo Function

-  **Write a function (`addTodo`):** Execute it when the add button is clicked.
-  **Inside the function:** Store the value of the input field in a variable and empty the input field.

### Create New Todo Item

-  **Within `addTodo` function:** Create new elements for the todo item — a list item (`<li>`), a span for the task content, and a delete button.
-  **Append elements:** Add the span and delete button as children of the list item.

### Set Text Content

 - **Set text content:** Assign the value of the input field to the span (the todo task) and set the text content of the delete button to 'Delete'.

### Append to List

-  **Append list item:** Add the list item as a child of the todo list (`<ul>`).

### Delete Todo Item

-  **Attach event listener:** Add it to the delete button so that when clicked, it removes the corresponding todo item.

### Mark Todo as Completed (Optional)

-  **Implement functionality:** Mark todo items as completed by adding a checkbox or toggle button.
-  **Styling:** Update the appearance of completed tasks to differentiate them from active tasks.

### Focus on Input Field

- **Use `focus()` method:** Focus the input field, ready for entering the next todo item.

---

By following these instructions, you'll create an interactive todo list application where users can dynamically manage their tasks with ease. This project provides an excellent opportunity to practice DOM manipulation and event handling skills while building a useful productivity tool.

---

**Happy Coding!**
