const mealDB = require('../config/db');

// Search makanan berdasarkan keyword
const searchMeals = async (req, res) => {
  try {
    const { q } = req.query;
    const response = await mealDB.get(`/search.php?s=${q || ''}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data makanan' });
  }
};

// Get detail makanan berdasarkan ID
const getMealDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await mealDB.get(`/lookup.php?i=${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil detail makanan' });
  }
};

// Get semua kategori makanan
const getCategories = async (req, res) => {
  try {
    const response = await mealDB.get('/categories.php');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil kategori' });
  }
};

module.exports = { searchMeals, getMealDetail, getCategories };