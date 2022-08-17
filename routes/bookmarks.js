const express = require("express");
const { isSignedIn } = require("../middlewares/validators/auth");
const {
  insertBookmarks,
  deleteBookmarks,
  allBookmarks,
} = require("../controllers/bookmarks");

const router = express.Router();
router.get("/detail", isSignedIn, allBookmarks);
router.post("/create/:id", isSignedIn, insertBookmarks);

router.delete("/delete", isSignedIn, deleteBookmarks);

module.exports = router;
