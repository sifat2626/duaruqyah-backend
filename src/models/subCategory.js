const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Subcategory = sequelize.define('Subcategory', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  cat_id: { type: DataTypes.INTEGER, allowNull: false },
  subcat_id: { type: DataTypes.INTEGER, allowNull: false },
  subcat_name_bn: { type: DataTypes.TEXT, allowNull: false },
  subcat_name_en: { type: DataTypes.TEXT, allowNull: false },
  no_of_dua: { type: DataTypes.INTEGER },
},{
  tableName: "sub_category", // Match SQLite table name
  timestamps: false, // Disable createdAt and updatedAt fields
});

module.exports = Subcategory;
