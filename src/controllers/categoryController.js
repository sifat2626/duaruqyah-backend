const Category = require("../models/category")

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll()
    res.status(200).json(categories)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" })
  }
}
