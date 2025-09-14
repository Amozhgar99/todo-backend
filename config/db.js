const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // stop server if DB fails
  }
};

module.exports = connectDB;
