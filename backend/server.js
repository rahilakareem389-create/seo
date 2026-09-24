const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "RankBoost SEO Agency API is running",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is healthy",
  });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill all fields.",
    });
  }

  console.log("New Contact Request:");
  console.log({
    name,
    email,
    message,
  });

  res.status(201).json({
    success: true,
    message: "Your message has been received.",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});