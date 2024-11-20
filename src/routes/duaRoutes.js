// src/routes/duaRoutes.js
const express = require("express")
const router = express.Router()
const duaController = require("../controllers/duaController")

router.get("/", duaController.getDuas)
router.get('/duas/category/:cat_id', duaController.getDuasByCategory);

module.exports = router
