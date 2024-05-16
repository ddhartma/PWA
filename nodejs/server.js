const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(cors());


let todos = [];

app.use(bodyParser.json());

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.json({ message: "Todo added successfully" });
});

app.put("/api/todos/:index", (req, res) => {
  const index = req.params.index;
  const todo = req.body;
  todos[index] = todo;
  res.json({ message: "Todo updated successfully" });
});

app.delete("/api/todos/:index", (req, res) => {
  const index = req.params.index;
  todos.splice(index, 1);
  res.json({ message: "Todo deleted successfully" });
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
