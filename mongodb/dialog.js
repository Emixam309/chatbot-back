const mongoose = require('mongoose')

const dialogSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  question: String,
  response: String,
})

module.exports = mongoose.model('Dialog', dialogSchema)