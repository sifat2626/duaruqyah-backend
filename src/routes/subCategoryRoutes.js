const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/subcategoryController');

// Routes for subcategories (using plural names)
router.post('/subcategories', subcategoryController.createSubcategory);  // Create a subcategory
router.get('/subcategories', subcategoryController.getAllSubcategories);  // Get all subcategories
router.get('/subcategories/:id', subcategoryController.getSubcategoryById);  // Get subcategory by ID
router.put('/subcategories/:id', subcategoryController.updateSubcategory);  // Update subcategory by ID
router.delete('/subcategories/:id', subcategoryController.deleteSubcategory);  // Delete subcategory by ID

// Route to get subcategories by category ID (plural naming convention)
router.get('/categories/:cat_id/subcategories', subcategoryController.getSubcategoriesByCategory);

module.exports = router;
