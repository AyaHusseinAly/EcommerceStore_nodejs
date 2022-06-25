dbo = require('../database')
const dbConnect = dbo.getDb();
console.log(dbConnect)

exports.insertProduct =  (insertCallback) =>{
    const productDocument = {
        "number":"109",
        "name":"Sweet Pants for women",
        "src":"img/prod6.PNG",
        "src1":"img/33.jpeg",
        "src2":"img/custlog.jpeg",
        "src3":"img/r8.jpg",
        "price":"1500",
        "quantity":"15",
        "product_desc":"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet v"

    };
  
    dbConnect
      .collection("products")
      .insertOne(productDocument, insertCallback);
}


exports.findAll =  (indexCallback) =>{

    dbConnect
      .collection("products")
      .find({}).limit(200)
      .toArray(indexCallback);
}