const express = require('express');
const categoryController = require('../controllers/CategoryController');
const auth = require('../middlewares/auth');

const route = express.Router();

route.post('/', auth, categoryController.infixCategories);
route.get('/', auth, categoryController.catchCategories);

module.exports = route;