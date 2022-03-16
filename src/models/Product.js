const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  brand: String,
  description: String,
  price: String,
})

module.exports = mongoose.model('Product', productSchema)
