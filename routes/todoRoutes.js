const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

router.post("/", async (req, res) => {
  const newTodo = new Todo({ text: req.body.text });
  const saved = await newTodo.save();
  res.json(saved);
});

router.patch("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.completed = !todo.completed;
  await todo.save();
  res.json(todo);
});

router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
