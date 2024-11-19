// src/routes/duaRoutes.js
const express = require("express")
const router = express.Router()
const duaController = require("../controllers/duaController")

router.get("/", duaController.getDuas)

module.exports = router
