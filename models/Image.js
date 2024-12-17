const mongoose = require('mongoose')
const User = require('./User')

const ImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "url is required"]
  },
  publicId: {
    type: String,
    required: [true, "publicId is required"]
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
  

}, {timestamps: true})

module.exports = mongoose.model('Image', ImageSchema)