const { Category } = require('../models');
const { categoryValidation } = require('./validation/validationSchema');

const infixCategories = async (name) => {
  const { type, message } = categoryValidation(name);

  if (type) return { type, message };

  const newCategory = await Category.create({ name });

  return { type: null, message: newCategory };
};

const catchCategories = async () => {
  const result = await Category.findAll();

  return result;
};

module.exports = {
  infixCategories,
  catchCategories,
};