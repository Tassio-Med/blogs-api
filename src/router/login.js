const express = require('express');
const loginController = require('../controllers/LoginController');

const route = express.Router();

route.post('/', loginController);

module.exports = route;