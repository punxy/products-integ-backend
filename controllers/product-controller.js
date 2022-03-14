import { getProducts } from '../services/product-service.js'
import { isItAPalindrome } from '../utils.js'

export const getPromotions = async (req, res) => {

  let discount = false
  const find = req.query.find
  const products = await getProducts(find);

  if(typeof find !== 'undefined' && isItAPalindrome(find)){
    discount = true

    products.map( product => {
      product.price = product.price * 0.5
      return product;
    })
  }
  
  res.status(201).json({
    discount,
    products
  })
}