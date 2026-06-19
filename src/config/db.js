// Konfigurasi axios untuk TheMealDB
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const mealDB = axios.create({
  baseURL: process.env.MEALDB_BASE_URL,
});

module.exports = mealDB;