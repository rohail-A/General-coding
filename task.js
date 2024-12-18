document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Add Task
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskName = taskInput.value.trim();
    if (taskName) {
      addTask(taskName);
      taskInput.value = "";
    }
  });

  // Function to Add Task
  function addTask(taskName) {
    const li = document.createElement("li");
    li.className = "task-item";

    li.innerHTML = `
      <span class="task-name">${taskName}</span>
      <div class="task-actions">
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    taskList.appendChild(li);

    // Add Event Listeners to Buttons
    li.querySelector(".complete-btn").addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove();
    });
  }
});
