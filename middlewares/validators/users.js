const path = require("path");
const crypto = require("crypto");
const validator = require("validator");
const { promisify } = require("util");
// const { users } = require ("../../models");

exports.getDetailValidator = async (req, res, next) => {
  try {
    if (!validator.isNumeric(req.param.id)) {
      return next({ message: "id not valid", statusCode: 400 });
    }
    next();
  } catch (error) {
    next(error);
  }
};
exports.createUpdateUserValidator = async (req, res, next) => {
  try {
    const errors = [];
   

    // Check price is a number
    //   Check input of title
    if (validator.isEmpty(req.body.firstName, { ignore_whitespace: false })) {
       console.log("dsdasadsad");
      errors.push("Please input the title!");
    }

    // If error
    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

    // If image was uploaded
    if (req.files.image) {
      // req.files.image is come from key (file) in postman
      const file = req.files.image;
      console.log("xxxzzzzzzzzzzzzzz");

      // Make sure image is photo
      if (!file.mimetype.startsWith("image")) {
        errors.push("File must be an image");
      }

      // Check file size (max 1MB)
      if (file.size > 1000000) {
        errors.push("Image must be less than 1MB");
      }

      // If error
      if (errors.length > 0) {
        return res.status(400).json({ errors: errors });
      }

      // Create custom filename
      let fileName = crypto.randomBytes(16).toString("hex");
      console.log(fileName);

      // Rename the file
      file.name = `${fileName}${path.parse(file.name).ext}`;

      // Make file.mv to promise
      const move = promisify(file.mv);

      // Upload image to /public/images
      await move(`./public/images/${file.name}`);

      // assign req.body.image with file.name
      req.body.image = file.name;
    }

    next();
  } catch (error) {
    console.log(error)
    res.status(400).json({ errors: ["Bad request"] });
  }
};
// Import validator
// const validator = require("validator");

// exports.createOrUpdateUserValidator = async (req, res, next) => {
//   try {
//     // Variabel to save errors
//     const errors = [];

//     //   Check input from user
//     if ((validator.isEmpty(req.body.task), { ignore_whitespace: false })) {
//       errors.push("Please input the user");
//     }

//     next();
//   } catch (error) {}
// };

