const express = require("express")
const { getAuthor, getBooks, getBooksWithAuthor } = require("../controllers/book-controller")

const router = express.Router()



router.post("/author", getAuthor)
router.post("/books", getBooks)
router.get("/books/:id", getBooksWithAuthor)


module.exports = router

