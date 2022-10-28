const express = require('express');
const postController = require('../controllers/PostController');
const auth = require('../middlewares/auth');

const route = express.Router();

route.post('/', auth, postController.infixPost);
route.get('/', auth, postController.catchPost);
route.get('/:id', auth, postController.getPostById);

module.exports = route;