const { Category } = require('../models/associations');  // Import the models

// Create a new category
exports.createCategory = async (req, res) => {
  try {
    const { cat_id, cat_name_bn, cat_name_en, no_of_subcat, no_of_dua, cat_icon } = req.body;

    // Check if category already exists
    const existingCategory = await Category.findOne({ where: { cat_id } });
    if (existingCategory) {
      return res.status(400).json({ message: 'Category with this cat_id already exists' });
    }

    // Create new category
    const category = await Category.create({
      cat_id,
      cat_name_bn,
      cat_name_en,
      no_of_subcat,
      no_of_dua,
      cat_icon,
    });

    return res.status(201).json({ message: 'Category created successfully', category });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();

    if (categories.length === 0) {
      return res.status(404).json({ message: 'No categories found' });
    }

    return res.status(200).json({ categories });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Get a category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    return res.status(200).json({ category });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Update a category by ID
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { cat_id, cat_name_bn, cat_name_en, no_of_subcat, no_of_dua, cat_icon } = req.body;

    // Find the category to update
    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Update category details
    category.cat_id = cat_id || category.cat_id;
    category.cat_name_bn = cat_name_bn || category.cat_name_bn;
    category.cat_name_en = cat_name_en || category.cat_name_en;
    category.no_of_subcat = no_of_subcat || category.no_of_subcat;
    category.no_of_dua = no_of_dua || category.no_of_dua;
    category.cat_icon = cat_icon || category.cat_icon;

    await category.save();

    return res.status(200).json({ message: 'Category updated successfully', category });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Delete a category by ID
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the category to delete
    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Delete the category
    await category.destroy();

    return res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error });
  }
};
