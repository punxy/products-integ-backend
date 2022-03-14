import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

mongoose.Promise = Promise

export const getUri = async () => {
  const mongoServer = await MongoMemoryServer.create()
  if (process.env.NODE_ENV === 'test') {
    return await mongoServer.getUri()
  }

  return process.env.DB_URI
}

export const connect = async ({ uri }) => {
  const mongooseOpts = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }

  await mongoose.connect(uri, mongooseOpts).then(
    () => {
      console.log(`MongoDB successfully connected to ${uri}`)
    },
    (err) => {
      console.log(`error to connect to: ${uri}`)
      console.log(err)
    }
  )
}

export const closeDb = async () => {
	const mongoServer = await MongoMemoryServer.create()
  await mongoose.disconnect()
  if (process.env.NODE_ENV === "test") {
    await mongoServer.stop()
  }
}
