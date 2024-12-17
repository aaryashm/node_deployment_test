const express = require("express")
const authMiddleware = require("../middlewares/auth-middleware")
const adminMiddleware = require("../middlewares/admin-middleware")

const router = express.Router()

router.get("/admin", authMiddleware, adminMiddleware, (req,res)=>{
  // const {username, userId, role} = req.userInfo

  res.json({
    message: "Welcome to the admin page",
    // user:{
    //   userId,
    //   username,
    //   role
    // }
  })
})

module.exports = router

