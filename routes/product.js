const express = require('express'); 
const router = express.Router();  

const productsController = require('../controllers/productsController');


// /products => post
router.post('/products', productsController.create);

// /products => get
router.get('/products', productsController.index);

// /products/num => get
router.get('/products/:num', productsController.find);


// /products/num => delete
router.delete('/products/:num', productsController.delete);

// /products/num => put
router.put('/products/:num', productsController.update);



module.exports = router