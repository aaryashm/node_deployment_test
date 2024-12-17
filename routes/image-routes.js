const express = require("express")
const authMiddleware = require("../middlewares/auth-middleware")
const adminMiddleware = require("../middlewares/admin-middleware")
const uploadMiddleware = require("../middlewares/upload-middleware")
const { uploadImageController, fetchImage, deleteImage } = require("../controllers/image-controller")

const router = express.Router()

router.post("/upload", authMiddleware, adminMiddleware, uploadMiddleware.single('image'), uploadImageController)
router.get("/", authMiddleware, fetchImage)
router.delete("/:id", authMiddleware, adminMiddleware, deleteImage)


module.exports = router

