const mongoose = require('mongoose')
const Author = require('./Author')

// const BookSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: [true, "Book title is required"],
//     trim: true,
//     maxlength: [100, "Book title cannot be more than 100 characters."]
//   },
//   author: {
//     type: String,
//     required: [true, "Author name is required"],
//     trim: true
//   },
//   year: {
//     type: Number,
//     required: [true, "Year is required"],
//     min: [1000, 'Year must be atleast 1000'],
//     max: [new Date().getFullYear(), 'Year cannot in future'],
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
  

// })

const BookSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Author
  }
  

})

module.exports = mongoose.model('Book', BookSchema)