const Category = require('./category');
const Subcategory = require('./subCategory');
const Dua = require('./dua');

// Associations with Subcategory and Dua
Category.hasMany(Subcategory, { foreignKey: 'cat_id' });
Category.hasMany(Dua, { foreignKey: 'cat_id' });

Subcategory.belongsTo(Category, { foreignKey: 'cat_id' });
Subcategory.hasMany(Dua, { foreignKey: 'subcat_id' });

Dua.belongsTo(Category, { foreignKey: 'cat_id' });
Dua.belongsTo(Subcategory, { foreignKey: 'subcat_id' });

module.exports = { Category, Subcategory, Dua };
