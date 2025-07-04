

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields!");
    return;
  }

  alert("Thank you for your message!");
  contactForm.reset();
});

function addTask() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();

  if (!task) {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  document.getElementById("todoList").appendChild(li);
  input.value = "";
}
