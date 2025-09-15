const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo({
      text: req.body.text,
    });

    const saved = await newTodo.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: "Failed to create todo" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    todo.completed = !todo.completed;
    todo.completedAt = todo.completed ? new Date() : null;

    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
});

module.exports = router;
