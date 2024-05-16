async function fetchTodos() {
  const response = await fetch("http://localhost:3000/api/todos");
  const todos = await response.json();
  return todos;
}

async function addTodo() {
  const input = document.getElementById("todoInput").value;
  const response = await fetch("http://localhost:3000/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: input }),
  });
  const result = await response.json();
  console.log(result.message);
  displayTodos();
}

async function deleteTodo(index) {
  const response = await fetch(`http://localhost:3000/api/todos/${index}`, {
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
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTodo(index));
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

window.onload = displayTodos;
