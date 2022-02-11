const {Schema, model} = require("mongoose")

const productSchema = new Schema({
  name: String,
  description: String,
  price: String,
})

module.exports = model("Product", productSchema)