// src/controllers/duaController.js
const Dua = require("../models/dua")

exports.getDuas = async (req, res) => {
  try {
    const duas = await Dua.findAll()
    res.status(200).json(duas)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch duas" })
  }
}
