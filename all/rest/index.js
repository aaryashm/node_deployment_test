const express = require('express')
const app = express()
const port = 3000

app.use(express.json())


const books = [
    {
        id: 1,
        title: "Book 1"
    },
    {
        id: 2,
        title: "Book 2"
    },
    {
        id: 3,
        title: "Book 3"
    }
]

app.get('/', (req, res) => {
  res.json({message: "Welcome to our api"})
})

app.get('/books', (req, res) => {
  res.status(200).json(books)
})

app.post('/books', (req, res) => {

  const newBook = {
    id: books.length + 1,
    title: `Book ${books.length + 1}`
  }

  books.push(newBook);

  res.status(200).json(newBook)
})

app.put('/books/:bookId', (req, res) => {

  const curr = books.find((b)=>b.id === parseInt(req.params.bookId));

  if(curr){
    curr.title = req.body.title || curr.title

    res.status(200).json(curr)
  }else{
    res.status(404).json({message: "Book Not fount"})
  }
  
})

app.delete('/books/:bookId', (req, res) => {

  const bookInd = books.findIndex((b)=>b.id === parseInt(req.params.bookId));

  if(bookInd!==-1){
    const del = books.splice(bookInd, 1)

    res.status(200).json(del)
  }else{
    res.status(404).json({message: "Book Not fount"})
  }
  
})

app.get('/books/:bookId', (req, res) => {

  const book = books.find((b)=>b.id === parseInt(req.params.bookId));
  if(book){
    res.status(200).json(book)
  }else{
    res.status(404).json({"message": "Book Not Found"})
  }
  
})

app.listen(port, () => {
  console.log(`:Server running at ${port}`)
})