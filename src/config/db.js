const { Sequelize } = require("sequelize")
const path = require("path")

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.resolve(__dirname, "../../db/dua_main.sqlite"),
  logging: false, // Disable logging in production
})

module.exports = sequelize
