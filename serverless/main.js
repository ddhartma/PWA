async function fetchTodos() {
  const response = await fetch("/.netlify/functions/todos");
  const todos = await response.json();
  return todos;
}

async function addTodo() {
  const input = document.getElementById("todoInput").value;
  const response = await fetch("/.netlify/functions/todos", {
    method: "POST",
    body: JSON.stringify({ text: input }),
  });
  const result = await response.json();
  console.log(result.message);
  displayTodos();
}

async function deleteTodo(index) {
  const response = await fetch(`/.netlify/functions/todos/${index}`, {
    method: "DELETE",
  });
  const result = await response.json();
  console.log(result.message);
  displayTodos();
}

async function displayTodos() {
  const todos = await fetchTodos();
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    todoList.appendChild(li);
  });
}

window.onload = displayTodos;
