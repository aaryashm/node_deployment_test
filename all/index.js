const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.set("view engine", 'ejs')
app.set("views", path.join(__dirname, "views"))

const products = [
    {
        id: 1,
        title: "Title 1"
    },
    {
        id: 2,
        title: "Title 2"
    },
    {
        id: 3,
        title: "Title 3"
    }
]

app.get('/', (req, res) => {
  res.render('home', {title: "Home Page", products})
})

app.get('/about', (req, res) => {
    res.render('about', {title: "About Page",})
  })

app.listen(port, () => {
  console.log(`Server running at ${port}`)
})