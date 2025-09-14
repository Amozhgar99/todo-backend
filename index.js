const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

// Start server
connectDB();
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));