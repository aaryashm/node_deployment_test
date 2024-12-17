const express = require('express')
const app = express()
const port = 3000

const middleware = (req, res, next)=>{
    console.log("my middle ware");
    next();
}

const middleware2 = (req, res, next)=>{
    console.log("my middle2 ware");
    next();
}


app.use(middleware2);

app.get('/', (req, res) => {
    res.send('Welcome')
  })

  app.use(middleware);

  
  
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })