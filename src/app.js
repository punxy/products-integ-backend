const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./router');
const { connect, getUri } = require('./db');

const app = express();

const con = async () => {
  const ENV = process.env.NODE_ENV || 'dev';
  const uri = await getUri(ENV)
  return connect({ uri })
}

var corsOptions = {
  origin: 'http://localhost/',
  methods: "GET"
}

con()
app.use(express.json())
app.use(cors(corsOptions))
app.use('/', router)
app.use(helmet.hidePoweredBy());
module.exports = app
