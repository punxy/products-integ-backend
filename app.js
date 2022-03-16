const express = require('express');
const helmet = require('helmet');
const router = require('./router');
const { connect, getUri } = require('./db');

const app = express();

const con = async () => {
  const uri = await getUri(process.env.NODE_ENV)
  return connect({ uri })
}

con()
app.use(express.json())
app.use('/', router)

app.use(helmet.hidePoweredBy());

module.exports = app
