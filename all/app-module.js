const express = require('express')
const app = express()
const port = 3000

//application level


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.use((err, req, res, next)=>{

//     res.status
// })