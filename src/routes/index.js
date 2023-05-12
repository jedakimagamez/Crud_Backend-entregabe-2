const express = require('express');
const router = express.Router();
const songRouter = require('./song.router');
const userRouter = require('./user.router');

// colocar las rutas aquí
router.use('/songs', songRouter);
router.use('/users', userRouter);

module.exports = router;