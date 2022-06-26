const express = require("express");
const db = require("./database")

const bodyParser= require('body-parser')

const PORT = 8080
db.connectToServer(() => {
    // ======= initiate express app ========
    var app = express();
    app.use(bodyParser.json());  // without it I get empty body obj
    app.use(bodyParser.urlencoded({ extended: false }))


    // ============= Import Routes =================
    const productRoutes = require('./routes/product')
    app.use(productRoutes)


    app.listen(PORT, function() {
        console.log(`listening on ${PORT}`)
    })

})

