const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  
const routes = require("./routes/Todoroute")

const app = express();
const PORT = process.env.PORT || 8080;  

app.use(express.json());  
app.use(cors()); 
const cors = require("cors");

app.use(cors({
  origin: "https://https://todo-mern-frontend-psi.vercel.app",
  credentials: true,
}));


// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.use('/api', routes); 
// INFO: Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
