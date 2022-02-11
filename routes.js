const express = require("express")
const { createProduct } = require("./controllers/product-controller")
const router = express.Router()

router.post("/products", createProduct)

router.get("/", function(req, res){
    res.send("server...")
})

module.exports.router = router