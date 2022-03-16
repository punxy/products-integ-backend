const Product = require('../models/Product');
const { isItAPalindrome } = require('../utils');

const getProducts = async filter => {
  let discount = false;
  let query = {};

  if(typeof filter !== 'undefined' ){
    query = {
      $or: [
        {description: filter.toString()},
        {brand: filter.toString()}
      ],
    }
  }
  
  const products = await Product.find(query)
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

const getProductById = async id => {

  let discount = false;
  const query = {
    'id': id.toString()
  }
  
  const product = await Product.findOne(query).lean();
  const newProduct = Object.assign({} , product);

  if(isItAPalindrome(id)){
    discount = true
    newProduct.price = newProduct.price * 0.5
  }

  return {
    discount,
    products: [newProduct]
  }
}

module.exports = {
  getProducts,
  getProductById
}