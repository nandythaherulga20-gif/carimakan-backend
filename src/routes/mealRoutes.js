const express = require('express');
const router = express.Router();
const { searchMeals, getMealDetail, getCategories } = require('../controllers/mealController');

router.get('/search', searchMeals);
router.get('/categories', getCategories);
router.get('/:id', getMealDetail);

module.exports = router;