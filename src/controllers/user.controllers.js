const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

const create = catchError(async (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  const user = await User.create({ first_name, last_name, email, password, birthday });
  res.status(201).json(user);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password, birthday } = req.body;
  await User.update({ first_name, last_name, email, password, birthday }, { where: { id } });
  res.sendStatus(204);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  res.sendStatus(204);
});

const getById = catchError(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  res.status(200).json(user);
});

module.exports = {
  getAll,
  create,
  update,
  remove,
  getById
};
