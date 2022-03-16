const express = require('express');
const { getPromotions } = require('./controllers/product-controller.js');
const router = express.Router()

router.get('/promotions', getPromotions)

router.get('/', function (req, res) {
  res.send('server...')
})

module.exports = router;