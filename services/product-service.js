import Product from '../models/Product.js'
import { isItAPalindrome } from '../utils.js'

export const getProducts = async filter => {
  let discount = false;
  const products = await Product.find({
    $or: [{description: filter},{brand: filter}],
  })

  const isAPalindrome = isItAPalindrome(filter)

  if(products.length == 0){
    return {
      discount: isAPalindrome,
      products: []
    };
  }

  if(isAPalindrome){
    discount = true
    products.map( product => {
      product.price = product.price * 0.5
      return product;
    })
  }

  return {
    discount,
    products
  };
}

export const getProductById = async id => {

  let discount = false;
  const product = await Product.findOne({
    'id': id
  });

  if(isItAPalindrome(id)){
    discount = true
    product.price = product.price * 0.5
  }

  return {
    discount,
    products: [product]
  }
}