const path = require('path');

const productModel = require('../models/product.js')


exports.create = (req, res, next) => {
    productModel.insertProduct(
        function (err, result) {
            if (err) {
              res.status(400).send("Error inserting product!");
            } else {
              console.log(`Added a new product with id ${result.insertedId}`);
              res.status(201).send({data:`Added a new product with id ${result.insertedId}`});
            }
          }
    )
}


exports.index = (req, res, next) => {
    productModel.findAll(
        function (err, result) {
            if (err) {
              res.status(400).send("Error fetching products!");
           } else {
              res.json(result);
            }
        }
    )
}



exports.getProductDetails = (req, res, next) => {
    res.json({
        products: []
    })
    // res.sendFile(path.join(__dirname,'../','views','productDetail.html'))
}

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
};

exports.postAddProduct = (req, res, next) => {
    console.log(req.body)
    // res.redirect('/home') 
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
}