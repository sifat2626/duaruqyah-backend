// src/controllers/subCategoryController.js
const SubCategory = require("../models/subCategory")

exports.getSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.findAll()
    res.status(200).json(subCategories)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch subcategories" })
  }
}
