const mongoose = require('mongoose')
const Company = require('./api/company/company.model')
const Historical = require('./api/historical/historical.model')
mongoose.Promise = global.Promise

const models = {
  company: Company,
  historical: Historical
}

const cleanDB = async (done) => {
  await models.company.deleteMany({})
  await models.historical.deleteMany({})
  done()
}

const connectToDB = async (url = 'mongodb://localhost/done') => {
  const connection = await mongoose.connect(url, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    poolSize: 3
  })
  return connection
}

const disconnectDB = (done = () => {}) => {
  mongoose.disconnect(done)
}


const generateMongooseId = () => {
  return mongoose.Types.ObjectId()
}

module.exports = {
  cleanDB,
  connectToDB,
  disconnectDB,
  generateMongooseId,
  models
}
