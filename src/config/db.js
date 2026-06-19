const axios = require('axios');
const dotenv = require('dotenv');

const axios = require('axios');

const mealDB = axios.create({
  baseURL: process.env.MEALDB_BASE_URL || 'https://www.themealdb.com/api/json/v1/1',
});

module.exports = mealDB;
const mealDB = axios.create({
  baseURL: process.env.MEALDB_BASE_URL,
});

module.exports = mealDB;