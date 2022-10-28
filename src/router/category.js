const express = require('express');
const categoryController = require('../controllers/CategoryController');
const auth = require('../middlewares/auth');

const route = express.Router();

route.post('/', auth, categoryController.insertCategory);
route.get('/', auth, categoryController.getAllCategory);

module.exports = route;