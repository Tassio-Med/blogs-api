const express = require('express');
const auth = require('../middlewares/auth');
const userController = require('../controllers/UserController');

const route = express.Router();

route.post('/', userController.insertUser);
route.get('/', auth, userController.catchUsers);
route.get('/:id', auth, userController.getByUserId);

module.exports = route;