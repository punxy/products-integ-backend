const mongoose = require("mongoose")
const Product = require("../models/Product")


module.exports.store = async ({ name, description, price }) => {
  const product = new Product({
    name,
    description,
    price,
  })
  await product.save()
  return product
}