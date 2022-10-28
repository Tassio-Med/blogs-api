const express = require('express');
const postController = require('../controllers/PostController');
const auth = require('../middlewares/auth');

const route = express.Router();

route.post('/', auth, postController.insertPost);
route.get('/', auth, postController.getAllPost);
route.get('/:id', auth, postController.getPostById);

module.exports = route;