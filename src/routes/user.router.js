const express = require('express');
const { getAll, create, remove, update, getById } = require('../controllers/user.controllers');

const userRouter = express.Router();

userRouter.route('/')
  .get(getAll)
  .post(create);

userRouter.route('/:id')
  .get(getById)
  .put(update)
  .delete(remove);

module.exports = userRouter;
