const { DataTypes } = require("sequelize")
const sequelize = require("../config/database") // Sequelize instance

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cat_name_bn: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cat_name_en: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    no_of_subcat: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    no_of_dua: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    cat_icon: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "category", // Match SQLite table name
    timestamps: false, // Disable createdAt and updatedAt fields
  }
)

module.exports = Category
