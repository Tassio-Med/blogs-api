require('dotenv').config();
const jwt = require('jsonwebtoken');
const { usersServices } = require('../services');

const OK = 200;
const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const CONFLICT = 409;
const secret = process.env.JWT_SECRET;

const insertUser = async (req, res) => {
  const user = req.body;

  const { type, message } = await usersServices.insertUser(user);
  
  if (type === 'exist') return res.status(CONFLICT).json({ message });
  if (type) return res.status(BAD_REQUEST).json({ message });

  const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

  const token = jwt.sign({ data: { userId: message.id } }, secret, jwtConfig);
  res.status(201).json({ token });
};

const catchUsers = async (_req, res) => {
  const message = await usersServices.catchUsers();
  res.status(OK).json(message);
};

const getByUserId = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await usersServices.getByUserId(id);

  if (type) return res.status(NOT_FOUND).json({ message });
  res.status(OK).json(message);
};

module.exports = { insertUser, catchUsers, getByUserId };