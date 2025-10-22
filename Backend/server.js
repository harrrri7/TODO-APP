// Import necessary modules
const express = require('express');
const cors = require('cors');

// Create our app
const app = express();
const port = process.env.PORT || 5000; // Our server will run on port 5000

// Middleware - these help our app work properly
app.use(cors()); // Allows frontend to communicate with backend
app.use(express.json()); // Lets us send JSON data

// Store our todos (in real app, we'd use a database)
let todos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a todo app', completed: true }
];

// Routes - these define what our server can do

// GET all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST - add new todo
app.post('/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    text: req.body.text,
    completed: false
  };
  todos.push(newTodo);
  res.json(newTodo);
});

// PUT - update todo
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = req.body.completed;
    todo.text = req.body.text || todo.text;
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// DELETE - remove todo
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    res.json({ message: 'Todo deleted' });
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
