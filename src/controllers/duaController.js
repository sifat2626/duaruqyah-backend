// src/controllers/duaController.js
const {Dua,Category,Subcategory} = require("../models/associations")

exports.getDuas = async (req, res) => {
  try {
    const duas = await Dua.findAll()
    res.status(200).json(duas)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch duas" })
  }
}

// Get all duas by category ID
exports.getDuasByCategory = async (req, res) => {
  try {
    const { cat_id } = req.params;  // Extract category ID from the route parameters

    // Find the category by ID
    const category = await Category.findByPk(cat_id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Get all duas related to the category
    const duas = await Dua.findAll({
      where: { cat_id },
      include: [
        {
          model: Category,
          attributes: ['cat_name_bn', 'cat_name_en'],
        },
      ],
    });

    if (duas.length === 0) {
      return res.status(404).json({ message: 'No duas found for this category' });
    }

    return res.status(200).json({ duas });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Get all duas by subcategory ID
exports.getDuasBySubcategory = async (req, res) => {
  try {
    const { subcat_id } = req.params; // Extract subcategory ID from the route parameters

    // Find the subcategory by ID
    const subcategory = await Subcategory.findByPk(subcat_id);

    if (!subcategory) {
      return res.status(404).json({ message: 'Subcategory not found' });
    }

    // Get all duas related to the subcategory
    const duas = await Dua.findAll({
      where: { subcat_id },
      include: [
        {
          model: Subcategory,
          attributes: ['subcat_name_bn', 'subcat_name_en'],
        },
      ],
    });

    if (duas.length === 0) {
      return res.status(404).json({ message: 'No duas found for this subcategory' });
    }

    return res.status(200).json({ duas });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error });
  }
};

