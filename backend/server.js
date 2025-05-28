const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  
const routes = require("./routes/Todoroute");

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());

// ✅ Proper CORS config for Vercel frontend
app.use(cors({
  origin: "https://todo-mern-frontend-psi.vercel.app",
  credentials: true,
}));

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', routes);

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
