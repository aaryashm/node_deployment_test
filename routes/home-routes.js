const express = require("express")
const authMiddleware = require("../middlewares/auth-middleware")

const router = express.Router()


router.get("/home", authMiddleware, (req,res)=>{
  const {username, userId, role} = req.userInfo

  res.json({
    message: "Welcome to the home page",
    user:{
      userId,
      username,
      role
    }
  })
})

module.exports = router