const router = require("express").Router();

const { isSignedIn } = require("../middlewares/validators/auth");

// const UsersController = require("../controllers/users")
// const SignInController = require("../controllers/signIn")

const {
  createUpdateUserValidator,
} = require("../middlewares/validators/users");
// Import users controller
const {
  signUp,
  signIn,
  updateAccount,
  deleteAccount,
} = require("../controllers/users");

router.post("/signup", createUpdateUserValidator, signUp);
router.post("/signin", signIn);

router.put("/update", isSignedIn, createUpdateUserValidator, updateAccount);
router.delete("/delete", deleteAccount);

// Export router
module.exports = router;
