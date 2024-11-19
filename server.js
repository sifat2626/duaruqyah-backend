// src/server.js
const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const sequelize = require("./config/database")

// Import routes
const categoryRoutes = require("./routes/categoryRoutes")
const subCategoryRoutes = require("./routes/subCategoryRoutes")
const duaRoutes = require("./routes/duaRoutes")

const app = express()

// Middlewares
app.use(cors({ origin: "*", credentials: true }))
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(cookieParser())

// API Routes
app.use("/api/v1/categories", categoryRoutes)
app.use("/api/v1/subcategories", subCategoryRoutes)
app.use("/api/v1/duas", duaRoutes)

// Sync the database and start the server
sequelize
  .sync({ alter: true })
  .then(() => {
    const port = process.env.PORT || 8000
    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  })
  .catch((err) => console.log("Database sync failed:", err))
