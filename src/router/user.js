const express = require('express');
const userController = require('../controllers/UserController');
const auth = require('../middlewares/auth');

const route = express.Router();

route.post('/', userController.insertUser);
route.get('/', auth, userController.getAllUser);
route.get('/:id', auth, userController.getByUserId);

module.exports = route;