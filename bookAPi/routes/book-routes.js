const express = require("express")
const { getAllBooks, getBook, postBook, putBook, deleteBook } = require("../controllers/book-controller")
const { getAuthor, getBooks } = require("../../controllers/book-controller")

const router = express.Router()


//all the routes that are related to books only
router.get("/books", getAllBooks)
router.get("/books/:id", getBook)
router.post("/books", postBook)
router.put("/books/:id", putBook)
router.delete("/books/:id", deleteBook)


router.delete("/author", getAuthor)
router.delete("/book", getBooks)

module.exports = router