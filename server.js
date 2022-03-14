import 'dotenv/config'
import app from './app.js'

app.listen(process.env.NODE_PORT, () =>
  console.log(`listening on port ${process.env.NODE_PORT}`)
)

export default app