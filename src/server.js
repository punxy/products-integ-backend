const app = require('./app')

require('dotenv').config()

app.listen(process.env.NODE_PORT, () =>
  console.log(`listening on port ${process.env.NODE_PORT}`)
)

module.exports = app