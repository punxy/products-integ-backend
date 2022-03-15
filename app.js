import express from 'express'
import helmet from 'helmet'
import router from './routes.js'
import { connect, getUri } from './db/index.js'

//import app from express()
const app = express();

const con = async () => {
  const uri = await getUri()
  return await connect({ uri })
}

con()
app.use(express.json())
app.use(router)
app.use(helmet.hidePoweredBy());

export default app
//module.exports.app = app
