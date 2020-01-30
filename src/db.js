const mongoose = require('mongoose')

const connectToDB = (url = 'mongodb://localhost/done') => {
  return mongoose.connect(url, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
  })
}

module.exports = connectToDB
