const { PostService } = require('../services');

const OK = 200;
const CREATED = 201;
const BAD_REQUEST = 400;
const NOT_FOUND = 404;

const infixPost = async (req, res) => {
  const { userId } = req.auth;
  const blogPost = req.body;
  const { type, message } = await PostService.insertBlogPost({ userId, ...blogPost });

  if (type) return res.status(BAD_REQUEST).json({ message });
  res.status(CREATED).json(message);
};

const catchPost = async (_req, res) => {
  const message = await PostService.catchPost();
  res.status(OK).json(message);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await PostService.getPostById(id);

  if (type) return res.status(NOT_FOUND).json({ message });
  res.status(OK).json(message);
};

module.exports = { infixPost, catchPost, getPostById };