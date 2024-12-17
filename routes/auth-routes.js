const express = require("express")
const { registerUser, loginUser, changePassword } = require("../controllers/auth-controller")
const authMiddleware = require("../middlewares/auth-middleware")

const router = express.Router()


//all the routes that are related to auth only
router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/change-password", authMiddleware,changePassword)

module.exports = router