import Product from '../models/Product.js'
import { isItAId } from '../utils.js'

export const getProducts = async filter => {
  if(isItAId(filter)){
    return await Product.findOne({
      'id': filter
    });
  }

  return await Product.find({
    $or: [{description: filter},{brand: filter}],
  })
}
