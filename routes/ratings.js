const express = require("express");
const { isSignedIn } = require("../middlewares/validators/auth");

const { createRating } = require("../controllers/ratings");

const router = express.Router();

router.post("/:id", isSignedIn, createRating);

module.exports = router;
