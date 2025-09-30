const express = require("express");
const Todo = require("../models/Todo");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const todos = await Todo.find({ user: req.user }).sort({ createdAt: -1 });
  res.json(todos);
});


router.post("/", auth, async (req, res) => {
  try {
    const newTodo = new Todo({
      text: req.body.text,
      user: req.user,
    });
    const saved = await newTodo.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: "Failed to create todo" });
  }
});

router.patch("/:id", auth, async (req, res) => {
  const todo = await Todo.findOne({ _id: req.params.id, user: req.user });
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  todo.completed = !todo.completed;
  todo.completedAt = todo.completed ? new Date() : null;

  await todo.save();
  res.json(todo);
});

router.delete("/:id", auth, async (req, res) => {
  const todo = await Todo.findOneAndDelete({ _id: req.params.id, user: req.user });
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.json({ message: "Todo deleted" });
});

module.exports = router;
