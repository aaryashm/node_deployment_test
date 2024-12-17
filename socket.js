require('dotenv').config()
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const app = express()
const port = process.env.PORT || 2000



const server = http.createServer(app)
const io = socketIo(server)

app.use(express.static('public'))

const users = new Set()

io.on("connection", (socket)=>{
  console.log(">>>>user is connected")

  socket.on("join", (username)=>{
    if(!username) return;
    users.add(username);

    socket.username = username;

    //broadcast to all clients
    io.emit("userJoined", username)

    io.emit("userList", Array.from(users))
  })

  socket.on("chatMessage", (message)=>{

    //broadcast to all clients
    io.emit("chatMessage", message)
    
  })

  socket.on("disconnect", ()=>{
    users.forEach(user=> {
      if(user === socket.username){
        users.delete(user)
        io.emit('userLeft', user)

        io.emit("userList", Array.from(users))
      }
    })
    
    
  })


})

server.listen(port, ()=>{
  console.log(`Server running at ${port}`)
})



// app.listen(port, () => {
//   console.log(`Server running at ${port}`)
// })