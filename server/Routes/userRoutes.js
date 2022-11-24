const express = require('express');
const userRoutes = express.Router();
const userController = require('../Controllers/userController');
const verifyJWT = require('../Middleware/verifyJWT');

userRoutes.use(verifyJWT)

userRoutes.put('/:id', userController.updateUser)
userRoutes.get('/:id', userController.getUser)
userRoutes.get('/', userController.getAllUsers)
userRoutes.get('/stats', userController.getUserStats)
userRoutes.delete('/:id', userController.deleteUser)

module.exports = userRoutes;