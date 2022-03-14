import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  id: Number,
  brand: String,
  description: String,
  price: String,
})

export default mongoose.models.Product || mongoose.model('Product', productSchema)

//module.exports = model('Product', productSchema)
