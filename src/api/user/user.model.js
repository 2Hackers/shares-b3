const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  sharess: [String],
}, {timestamps: true})

userSchema.index({username: 'text'});

module.exports = mongoose.model('user', userSchema)
