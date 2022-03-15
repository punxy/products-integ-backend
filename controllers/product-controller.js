import { getProducts, getProductById } from '../services/product-service.js'
import { isItAId } from '../utils.js'

export const getPromotions = async (req, res) => {

  const find = req.query.find
  let results;

  if(isItAId(find)){
      results = await getProductById(find);
  } else {
      results = await getProducts(find);
  }

  res.status(201).json(results)
}