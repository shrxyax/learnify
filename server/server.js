// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const noteRoutes = require("./routes/noteRoutes"); // ✅ Notes route

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/notes", noteRoutes); // ✅ Notes route included

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
