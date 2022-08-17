const express = require("express");

const {
  getAllCategories,
  getDetailCategories,
  createCategories,
  updateCategories,
  deleteCategories,
} = require("../controllers/categories");

// Make router
const router = express.Router();

router.route("/").post(createCategories).get(getAllCategories);

router
  .route("/:id")
  .get(getDetailCategories)
  .put(updateCategories)
  .delete(deleteCategories);

module.exports = router; // Export router
