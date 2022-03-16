const { getProducts, getProductById } = require('../services/product-service');
const { isItAId } = require('../utils')

const getPromotions = async (req, res) => {

  const find = req.query.find
  let results;

  if(isItAId(find)){
      results = await getProductById(find);
  } else {
      results = await getProducts(find);
  }

  res.status(201).json(results)
}

module.exports = {
  getPromotions
}