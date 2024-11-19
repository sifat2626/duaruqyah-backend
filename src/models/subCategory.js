// src/models/subCategory.js
const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")
const Category = require("./category")

const SubCategory = sequelize.define("SubCategory", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

// Define relationships
SubCategory.belongsTo(Category)

module.exports = SubCategory
