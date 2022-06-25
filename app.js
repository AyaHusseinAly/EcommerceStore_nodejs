const express = require("express");
const db = require("./database")

const PORT = 8080
db.connectToServer(() => {
    // ======= initiate express app ========
    var app = express();
    app.set("view engine","ejs");

    // ============= Import Routes =================
    const productRoutes = require('./routes/product')
    app.use(productRoutes)


    app.listen(PORT, function() {
        console.log(`listening on ${PORT}`)
    })

})

