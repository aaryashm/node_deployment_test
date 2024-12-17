const Book = require("../models/Book")

const getAllBooks = async(req, res)=>{
  try{
    const books = await Book.find()
    if(books){
      res.status(200).json({
        success: true,
        data: books,
        message: "Books Fetch Successful"
      })
    }
  }catch(e){
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    })
  }
}


const getBook = async(req, res)=>{
  try{
    const book = await Book.findById(req.params.id)
    if(book){
      res.status(200).json({
        success: true,
        data: book,
        message: "Book Fetch Successful"
      })
    }else{
      res.status(404).json({
        success: false,
        message: "No Book found"
      })
    }
  }catch(e){
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    })
  }
}

const postBook = async(req, res)=>{
  try{
    const book = await Book.create(req.body)
    if(book){
      res.status(201).json({
        success: true,
        data: book,
        message: "Books Successfully Created"
      })
    }
  }catch(e){
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    })
  }
}

const putBook = async(req, res)=>{
  try{

    const updated = req.body

    const book = await Book.findByIdAndUpdate(req.params.id, updated)
    if(book){
      res.status(200).json({
        success: true,
        data: book,
        message: "Book Update Successful"
      })
    }else{
      res.status(404).json({
        success: false,
        message: "No Book found"
      })
    }
  }catch(e){
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    })
  }
}

const deleteBook = async(req, res)=>{
  try{
    const book = await Book.findByIdAndDelete(req.params.id)
    if(book){
      res.status(200).json({
        success: true,
        data: book,
        message: "Book Delete Successful"
      })
    }else{
      res.status(404).json({
        success: false,
        message: "No Book found"
      })
    }
  }catch(e){
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    })
  }
}

module.exports = {
  deleteBook,
  getAllBooks,
  getBook,
  postBook,
  putBook
}