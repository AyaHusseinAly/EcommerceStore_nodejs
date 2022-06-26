dbo = require('../database')
const dbConnect = dbo.getDb();
console.log(dbConnect)

exports.insertProduct =  (data, Callback) =>{
  
    dbConnect
      .collection("products")
      .insertOne(data, Callback);
}


exports.findAll =  (Callback) =>{

    dbConnect
      .collection("products")
      .find({}).limit(200)
      .toArray(Callback);
}


exports.find =  (num, Callback) =>{

    dbConnect
      .collection("products")
      .findOne({number: num}, Callback);
}



exports.delete =  (num, Callback) =>{

    dbConnect
      .collection("products")
      .deleteOne({number: num}, Callback);
}


exports.update =  (num, data, Callback) =>{

    dbConnect
      .collection("products")
      .updateOne({number: num}, {$set: data}, Callback);
}