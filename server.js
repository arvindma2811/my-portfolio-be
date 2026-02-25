const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(express.json());

// CORS (Local + Production)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://my-portfolio-fe-i3x4.vercel.app",
    ],
    credentials: true,
  })
);

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);