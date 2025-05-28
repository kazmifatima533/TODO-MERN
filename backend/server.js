const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes/Todoroute');

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Use express.json() before routes
app.use(express.json());

// ✅ CORS Setup — Allow only your frontend's domain
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// ✅ Routes
app.use('/api', routes);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
