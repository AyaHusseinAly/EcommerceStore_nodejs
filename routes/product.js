const express = require('express'); 
const router = express.Router();  

const productsController = require('../controllers/productsController');


// /products => post
router.post('/products', productsController.create);

// /products => get
router.get('/products', productsController.index);



// // /products/{id}
// router.get('/products', productsController.getProductDetails)

// // /add-product => get
// router.get('/add-product', productsController.getAddProduct)

// // /add-product => post
// router.post('/add-product', productsController.postAddProduct)

module.exports = router