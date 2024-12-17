const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    trim: true,
    maxlength: [100, "Book title cannot be more than 100 characters."]
  },
  author: {
    type: String,
    required: [true, "Author name is required"],
    trim: true
  },
  year: {
    type: Number,
    required: [true, "Year is required"],
    min: [1000, 'Year must be atleast 1000'],
    max: [new Date().getFullYear(), 'Year cannot in future'],
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  

})

module.exports = mongoose.model('Book', BookSchema)