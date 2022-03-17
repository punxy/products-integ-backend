const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

mongoose.Promise = Promise

const getUri = async (node_env) => {
  if (node_env == 'test') {
    const mongoServer = await MongoMemoryServer.create()
    return mongoServer.getUri()
  }

  return process.env.DB_URI || 'mongodb+srv://productListUser:productListPassword@integ-cluster.fylem.mongodb.net/promotions?retryWrites=true&w=majority'
}

const connect = async ({ uri }) => {
  const mongooseOpts = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 1000,
  }

  try{
    await mongoose.connect(uri, mongooseOpts)
  } catch(err){
    console.log(`error to connect to: ${uri}`)
  }
}

const closeDb = async () => {
	const mongoServer = await MongoMemoryServer.create()
  await mongoose.disconnect()
  if (process.env.NODE_ENV === "test") {
    await mongoServer.stop()
  }
}

module.exports = {
  getUri,
  connect,
  closeDb
}