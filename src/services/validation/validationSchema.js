const { userSchema, categorySchema } = require('./schema');

const userValidation = (user) => {
  const { value, error } = userSchema.validate(user); 
  
  if (error) return { type: 'error', message: error.message };
  return { type: null, message: value };
};

const categoryValidation = (name) => {
  const { value, error } = categorySchema.validate({ name }); 

  if (error) return { type: 'error', message: error.message };
  return { type: null, message: value };
};

module.exports = { userValidation, categoryValidation };