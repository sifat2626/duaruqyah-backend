const { Subcategory, Category, Dua } = require('../models/associations');  // Import models

// Create a new subcategory
exports.createSubcategory = async (req, res) => {
  try {
    const { cat_id, subcat_id, subcat_name_bn, subcat_name_en, no_of_dua } = req.body;

    // Check if category exists
    const category = await Category.findByPk(cat_id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Create new subcategory
    const subcategory = await Subcategory.create({
      cat_id,
      subcat_id,
      subcat_name_bn,
      subcat_name_en,
      no_of_dua,
    });

    return res.status(201).json({ message: 'Subcategory created successfully', subcategory });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Get all subcategories
exports.getAllSubcategories = async (req, res) => {
  try {
    const subcategories = await Subcategory.findAll({
      include: [
        {
          model: Category,
          attributes: ['cat_name_bn', 'cat_name_en'], // Include category names
        },
      ],
    });

    if (subcategories.length === 0) {
      return res.status(404).json({ message: 'No subcategories found' });
    }

    return res.status(200).json({ subcategories });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Get a subcategory by ID
exports.getSubcategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const subcategory = await Subcategory.findByPk(id, {
      include: [
        {
          model: Category,
          attributes: ['cat_name_bn', 'cat_name_en'],
        },
        {
          model: Dua,
          attributes: ['dua_name_bn', 'dua_name_en'], // Include dua names if needed
        },
      ],
    });

    if (!subcategory) {
      return res.status(404).json({ message: 'Subcategory not found' });
    }

    return res.status(200).json({ subcategory });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Update a subcategory by ID
exports.updateSubcategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { cat_id, subcat_id, subcat_name_bn, subcat_name_en, no_of_dua } = req.body;

    // Find the subcategory to update
    const subcategory = await Subcategory.findByPk(id);

    if (!subcategory) {
      return res.status(404).json({ message: 'Subcategory not found' });
    }

    // Check if the category exists
    const category = await Category.findByPk(cat_id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Update subcategory details
    subcategory.cat_id = cat_id || subcategory.cat_id;
    subcategory.subcat_id = subcat_id || subcategory.subcat_id;
    subcategory.subcat_name_bn = subcat_name_bn || subcategory.subcat_name_bn;
    subcategory.subcat_name_en = subcat_name_en || subcategory.subcat_name_en;
    subcategory.no_of_dua = no_of_dua || subcategory.no_of_dua;

    await subcategory.save();

    return res.status(200).json({ message: 'Subcategory updated successfully', subcategory });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Delete a subcategory by ID
exports.deleteSubcategory = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the subcategory to delete
    const subcategory = await Subcategory.findByPk(id);

    if (!subcategory) {
      return res.status(404).json({ message: 'Subcategory not found' });
    }

    // Delete the subcategory
    await subcategory.destroy();

    return res.status(200).json({ message: 'Subcategory deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Get all subcategories by category ID
exports.getSubcategoriesByCategory = async (req, res) => {
  try {
    const { cat_id } = req.params;  // Extract category ID from the route parameters

    // Find the category by ID
    const category = await Category.findByPk(cat_id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Get all subcategories related to the category
    const subcategories = await Subcategory.findAll({
      where: { cat_id },
      include: [
        {
          model: Category,
          attributes: ['cat_name_bn', 'cat_name_en'],
        },
      ],
    });

    if (subcategories.length === 0) {
      return res.status(404).json({ message: 'No subcategories found for this category' });
    }

    return res.status(200).json({ subcategories });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error });
  }
};