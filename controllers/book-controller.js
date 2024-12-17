const Author = require("../models/Author")
const Book = require("../models/Book")



const getAuthor = async(req, res)=>{
  try{
    const author =  new Author(req.body)
    await author.save()

    res.status(201).json({
      success: true,
      data: author
    })
    
  }catch(e){
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    })
  }
}

const getBooks = async(req, res)=>{
  try{

    const book =  new Book(req.body)
    await book.save()

    res.status(201).json({
      success: true,
      data: book
    })
    
    
  }catch(e){
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    })
  }
}

const getBooksWithAuthor = async(req, res)=>{
  try{
    console.log(">>>>>")

    const book =  await Book.findById(req.params.id).populate('author')
    if(!book){
      return res.status(404).json({
        success: false,
        message: "Book Not found"
      })
    }

    res.status(200).json({
      success: true,
      data: book
    })
    
    
  }catch(e){
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    })
  }
}








module.exports = {
  getBooks,
  getAuthor,
  getBooksWithAuthor
}