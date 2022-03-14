import express from 'express'
import { getPromotions } from './controllers/product-controller.js'
const router = express.Router()

router.get('/promotions', getPromotions)

router.get('/', function (req, res) {
  res.send('server...')
})

//module.exports.router = router
export default router