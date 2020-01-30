const mongoose = require('mongoose')
const DateOnly = require('mongoose-dateonly')(mongoose);
const historicalSchema = new mongoose.Schema({
  company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'company'
  },
  date: {
    type: DateOnly,
    required: true
  },
  openValue: { type: Number, required: true },
  closeValue: { type: Number, required: true },
  maxValue: { type: Number, required: true },
  minValue: { type: Number, required: true },
  }
)

historicalSchema.index({company: -1});


module.exports = mongoose.model('historical', historicalSchema)
