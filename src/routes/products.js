const express = require('express');

const productsController = require('../controllers/products_controllers')

const productRoutes = express.Router();

//Creating Product
productRoutes.post('/create-product',productsController.createProduct);

//Displaying all the products
productRoutes.get('/',productsController.getAllProducts);

//Updating the product
productRoutes.post('/',productsController.updateProductByProductId);

//Deleting the product
productRoutes.delete('/',productsController.deleteProductByProductId);

//Fetching Featured Products
productRoutes.get('/featured',productsController.getFeaturedProducts);

//Fetching Products with price less then certain value
productRoutes.post('/filter/price',productsController.getProductsAfterPriceFilter);

//Fetching Products with ratings more then certain value
productRoutes.post('/filter/ratings',productsController.getProductsAfterRatingFilter);


module.exports = productRoutes;