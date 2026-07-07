import 'dotenv/config'; 
import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

// Connect to MongoDB
// This uses the MONGODB_URI you set in the Render Environment Variables
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("Database connection error:", err));

// Test route
app.get('/', (req, res) => {
  res.send('Server is running and connected to the database!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});