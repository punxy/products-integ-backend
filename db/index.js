const mongoose = require("mongoose")
const { MongoMemoryServer } = require("mongodb-memory-server")

mongoose.Promise = Promise


module.exports.getUri = async () => {
	const mongoServer = await MongoMemoryServer.create()
	if (process.env.NODE_ENV === "test") {
	 	return await mongoServer.getUri()
	}

	return process.env.DB_URI
}

module.exports.connect = async ({ uri }) => {
  const mongooseOpts = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  }

  await mongoose.connect(uri, mongooseOpts)
  console.log("conectado ??")

  mongoose.connection.once("open", () => {
    console.log(`MongoDB successfully connected to ${uri}`)
  })
}

// module.exports.closeDb = async () => {
// 	const mongoServer = await MongoMemoryServer.create()
//   await mongoose.disconnect()
//   if (process.env.NODE_ENV === "test") {
//     await mongoServer.stop()
//   }
// }