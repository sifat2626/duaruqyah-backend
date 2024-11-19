// src/routes/subCategoryRoutes.js
const express = require("express")
const router = express.Router()
const subCategoryController = require("../controllers/subCategoryController")

router.get("/", subCategoryController.getSubCategories)

module.exports = router
