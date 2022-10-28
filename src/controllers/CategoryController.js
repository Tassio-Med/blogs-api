const { CategoryService } = require('../services');

const infixCategories = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await CategoryService.infixCategories(name);
  
  if (type) return res.status(400).json({ message });
  res.status(201).json(message);
};

const catchCategories = async (_req, res) => {
  const result = await CategoryService.catchCategories();
  res.status(200).json(result);
};

module.exports = {
  catchCategories,
  infixCategories,
};