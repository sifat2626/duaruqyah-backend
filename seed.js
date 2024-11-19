const sequelize = require("./src/config/database")
const Category = require("./src/models/category")

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true }) // Recreate the tables

    // Add dummy categories
    await Category.bulkCreate([
      {
        id: 1,
        cat_id: 101,
        cat_name_bn: "বিভাগ ১",
        cat_name_en: "Category 1",
        no_of_subcat: 5,
        no_of_dua: 20,
        cat_icon: "/icons/cat1.png",
      },
      {
        id: 2,
        cat_id: 102,
        cat_name_bn: "বিভাগ ২",
        cat_name_en: "Category 2",
        no_of_subcat: 3,
        no_of_dua: 10,
        cat_icon: "/icons/cat2.png",
      },
    ])

    console.log("Database seeded successfully!")
  } catch (error) {
    console.error("Failed to seed database:", error.message)
  } finally {
    process.exit()
  }
}

seedDatabase()
