const mongoose = require('mongoose')

const dialogSchema = mongoose.Schema({
  question: String,
  response: String,
  createdAt: Date,
  editedAt: Date,
})

module.exports = mongoose.model('Dialog', dialogSchema)