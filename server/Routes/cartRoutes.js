const express = require('express');
const cartRoutes = express.Router();
const cartController = require('../Controllers/cartController');

cartRoutes.post('/', cartController.postCart);
cartRoutes.put('/:id', cartController.updateCart);
cartRoutes.delete('/:id', cartController.deleteCart);
cartRoutes.get('/:userId', cartController.getUserCart);
cartRoutes.get('/', cartController.getAll);

module.exports = cartRoutes;