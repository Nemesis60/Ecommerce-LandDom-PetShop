const express = require('express');
const productRoutes = express.Router();
const productController = require('../Controllers/productController');

productRoutes.post('/', productController.createProduct)
productRoutes.put('/:id', productController.updateProduct)
productRoutes.delete('/:id', productController.deleteProduct)
productRoutes.get('/:id', productController.getProduct)
productRoutes.get('/', productController.getAllProducts)

module.exports = productRoutes;