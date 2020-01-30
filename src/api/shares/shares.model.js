const mongoose = require('mongoose')
const sharesSchema = new mongoose.Schema({
  codNeg: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
}, {timestamps: true})

sharesSchema.index({code: 'text'});

module.exports = mongoose.model('shares', sharesSchema)
