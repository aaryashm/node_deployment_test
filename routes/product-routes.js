const express = require("express")
const { insertSampleProducts, getProductStats, getProductAnalysis } = require("../controllers/product-controller")

const router = express.Router()

router.post("/init", insertSampleProducts)
router.get("/stats", getProductStats)
router.get("/analysis", getProductAnalysis)

module.exports = router

