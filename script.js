// Get DOM elements
const taskInput = document.getElementById('task-input');
const dueDateInput = document.getElementById('due-date-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  const dueDate = dueDateInput.value;

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <span class="due-date">${dueDate ? `Due: ${dueDate}` : ''}</span>
    <div class="actions">
      <button class="complete-btn" onclick="toggleComplete(this)">
        <i class="fas fa-check"></i>
      </button>
      <button class="delete-btn" onclick="deleteTask(this)">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `;

  // Add the new task to the list
  taskList.appendChild(li);

  // Clear the input fields
  taskInput.value = '';
  dueDateInput.value = '';
}

// Function to mark a task as completed
function toggleComplete(button) {
  const li = button.closest('li');
  li.classList.toggle('completed');
  button.innerHTML = li.classList.contains('completed') ? '<i class="fas fa-undo"></i>' : '<i class="fas fa-check"></i>';
}

// Function to delete a task with animation
function deleteTask(button) {
  const li = button.closest('li');
  li.style.animation = 'fadeOut 0.3s ease';
  li.addEventListener('animationend', () => {
    taskList.removeChild(li);
  });
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Event listener for the "Enter" key
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Add fadeOut animation to CSS
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(20px);
    }
  }
`;
document.head.appendChild(style);