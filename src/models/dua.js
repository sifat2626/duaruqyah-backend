const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Dua = sequelize.define('Dua', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  cat_id: { type: DataTypes.INTEGER, allowNull: false },
  subcat_id: { type: DataTypes.INTEGER, allowNull: false },
  dua_id: { type: DataTypes.INTEGER, allowNull: false },
  dua_name_bn: { type: DataTypes.TEXT, allowNull: false },
  dua_name_en: { type: DataTypes.TEXT, allowNull: false },
  top_bn: { type: DataTypes.TEXT },
  top_en: { type: DataTypes.TEXT },
  dua_arabic: { type: DataTypes.TEXT },
  dua_indopak: { type: DataTypes.TEXT },
  clean_arabic: { type: DataTypes.TEXT },
  transliteration_bn: { type: DataTypes.TEXT },
  transliteration_en: { type: DataTypes.TEXT },
  translation_bn: { type: DataTypes.TEXT },
  translation_en: { type: DataTypes.TEXT },
  bottom_bn: { type: DataTypes.TEXT },
  bottom_en: { type: DataTypes.TEXT },
  refference_bn: { type: DataTypes.TEXT },
  refference_en: { type: DataTypes.TEXT },
  audio: { type: DataTypes.TEXT },
},{
  tableName: "dua", // Match SQLite table name
  timestamps: false, // Disable createdAt and updatedAt fields
});

module.exports = Dua;
