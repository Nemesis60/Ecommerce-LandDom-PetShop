const express = require('express');
const orderRouter = express.Router();
const orderController = require('../Controllers/orderController');

orderRouter.post('/', orderController.createOrder)
orderRouter.put('/:id', orderController.updateOrder)
orderRouter.delete('/:id', orderController.deleteOrder)
orderRouter.get('/:userId', orderController.getUserOrders)
orderRouter.get('/', orderController.getAllOrders)
orderRouter.get('/income', orderController.getMonthlyIncome)

module.exports = orderRouter;