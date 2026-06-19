const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const errorHandler = require('./src/middleware/errorHandler');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'CariMakan Backend berjalan!' });
});

// Routes
app.use('/api/meals', require('./src/routes/mealRoutes'));
app.use('/api/cart', require('./src/routes/cartRoutes'));

// Error Handler (harus paling bawah)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});