const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
    completedAt: { type: Date, default: null },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true } // adds createdAt and updatedAt
);

module.exports = mongoose.model("Todo", todoSchema);
