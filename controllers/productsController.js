const path = require('path');

const productModel = require('../models/product.js')


exports.create = (req, res, next) => {
    const data = req.body;
    productModel.insertProduct( data,
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


exports.find = (req, res, next) => {
    const num = req.params.num
    productModel.find(num ,
        function (err, result) {
            if (err) {
                res.status(400).send(`Error fetching product with number ${num}!`);
           } else {
                if(result != null)
                    res.json(result);
                res.status(404).json({data: `product with number ${num} is Not Found`});
            }
        }
    )
}


exports.delete = (req, res, next) => {
    const num = req.params.num
    productModel.delete(num ,
        function (err, result) {
            if (err) {
                res.status(400).send(`Error deleting product with number ${num}!`);
           } else {
                res.json(result);
            }
        }
    )
}



exports.update = (req, res, next) => {
    const num = req.params.num;
    const data = req.body;
    console.log(data)
    productModel.update(num , data,
        function (err, result) {
            if (err) {
                // console.log(err)
                res.status(400).send(`Error updating product with number ${num}!`);
           } else {
                res.json(result);
            }
        }
    )
}
