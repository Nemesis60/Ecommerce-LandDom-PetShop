const express = require('express');
const authRouter = express.Router();
const authController = require('../Controllers/authController');
const loginLimiter = require('../Middleware/LoginLimiter');

authRouter.post('/register', authController.register);
authRouter.post('/login', loginLimiter, authController.login);
authRouter.get('/refresh', authController.refresh)
authRouter.post('/logout',authController.logout);

module.exports = authRouter;