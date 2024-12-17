require('dotenv').config()
const express = require('express')
const connectToDB = require('./database/db')
const app = express()
const authRoutes = require('./routes/auth-routes')
const homeRoutes = require('./routes/home-routes')
const adminRoutes = require('./routes/admin-routes')
const uploadImageRoutes = require('./routes/image-routes')
const productRoutes = require('./routes/product-routes')
const bookRoutes = require('./routes/book-routes')
const port = process.env.PORT || 2000

connectToDB()
app.use(express.json())

//routes
app.use('/api/auth', authRoutes)
app.use('/api', homeRoutes)
app.use('/api', adminRoutes)
app.use('/api/images', uploadImageRoutes)

app.use('/api/products', productRoutes)
app.use('/api/refs', bookRoutes)


app.listen(port, () => {
  console.log(`Server running at ${port}`)
})