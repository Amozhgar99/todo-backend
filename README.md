# 📝 ToDo App Backend

This is the backend for the ToDo App, built with **Node.js**, **Express**, and **MongoDB**.  
It provides authentication (JWT-based) and CRUD APIs for todos, with each user having their own todos.

---

## 🚀 Features
- 🔐 User authentication (register/login with JWT)
- 🗂 Each user has their own todos
- ✅ Create, read, update, delete todos
- 📅 Timestamps for created/updated todos
- Secure password storage with **bcrypt**
- CORS enabled for frontend connection

---

## 📦 Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

---

## ⚙️ Setup & Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/todo-backend.git
   cd todo-backend
   npm install
   npm run dev
   npm start
