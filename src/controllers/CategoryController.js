const { CategoryService } = require('../services');

const OK = 200;
const CREATED = 201;
const BAD_REQUEST = 400;

const infixCategories = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await CategoryService.infixCategories(name);
  
  if (type) return res.status(BAD_REQUEST).json({ message });
  res.status(CREATED).json(message);
};

const catchCategories = async (_req, res) => {
  const result = await CategoryService.catchCategories();
  res.status(OK).json(result);
};

module.exports = { catchCategories, infixCategories };