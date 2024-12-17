require('dotenv').config()
const express = require('express')
const connectToDB = require('./database/db')
const app = express()
const bookRoutes = require('./routes/book-routes')
const port = process.env.PORT || 2000

connectToDB()
app.use(express.json())

//routes
app.use('/api', bookRoutes)


app.listen(port, () => {
  console.log(`Server running at ${port}`)
})