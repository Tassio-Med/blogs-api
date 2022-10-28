require('dotenv').config();
const jwt = require('jsonwebtoken');
const { usersServices } = require('../services');

// const OK = 200;
const BAD_REQUEST = 400;
const secret = process.env.JWT_SECRET;
const isBodyValid = (email, password) => email && password;

module.exports = async (req, res) => {
  const { email, password } = req.body;
  if (!isBodyValid(email, password)) {
    return res.status(BAD_REQUEST).json({ message: 'Some required fields are missing' });
  }

  const user = await usersServices.getByEmail(email);
  if (!user || user.password !== password) {
    return res.status(BAD_REQUEST).json({ message: 'Invalid fields' }); 
  }

  const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
  res.status(200).json({ token });
};