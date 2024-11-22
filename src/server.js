const express = require("express")
const { Sequelize } = require("sequelize")
const { readdirSync } = require("fs")
const path = require("path")
const cors = require("cors")
require("dotenv").config()

const app = express()
const port = process.env.PORT || 8000

// Middleware
app.use(cors({
    origin: [
        "https://duaruqyah-frontend-two.vercel.app",
        "http://localhost:3000"
    ],
    credentials: true,
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
readdirSync(path.join(__dirname, "routes")).forEach((file) => {
  app.use("/api/v1", require(path.join(__dirname, "routes", file)))
})

// Database Connection
const sequelize = require("./config/database")
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully.")
    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  })
  .catch((err) => console.error("Database connection error:", err))
