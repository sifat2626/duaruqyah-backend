// src/models/dua.js
const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")
const SubCategory = require("./subCategory")

const Dua = sequelize.define("Dua", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
})

// Define relationships
Dua.belongsTo(SubCategory)

module.exports = Dua
