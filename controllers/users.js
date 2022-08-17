const { users, event, comment, bookmarks } = require("../models");
// Import encrytion
const { encryptPwd } = require("../helpers/encryption");
const encryption = require("../helpers/encryption");
// Import jwt webson token
const { generateToken } = require("../helpers/jwt");

// Make class user
class UsersController {
  static async signUp(req, res, next) {
    let statusCode;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = encryptPwd(req.body.password);

    const image = req.body.image;
    const dataUser = { firstName, lastName, email, password, image };

    users
      .create(dataUser)
      .then((users) => {
        if (users) {
          statusCode = 201;
          delete users.dataValues.password;
          let output = {
            statusCode,
            userCreated: users,
          };

          res.status(201).json(output);
        }
      })
      .catch((err) => {
        console.log("err", err);
        next(err);
      });
  }
  static async signIn(req, res, next) {
    try {
      // get the input of req.body
      const email = req.body.email;
      const password = req.body.password;

      //   Get user by email
      const data = await users.findOne({
        where: { email: email },
      });
      console.log(data);
      //   If user wrong input of email or password
      if (!data) {
        return res
          .status(400)
          .json({ statusCode: 401, message: "Email/password invalid" });
      }

      let isPwdValid = encryption.isPwdValid(password, data.password);

      if (!isPwdValid) {
        return res
          .status(400)
          .json({ statusCode: 401, message: "Email/password invalid" });
      }

      const { id, firstName, lastName } = data;

      const payload = {
        id,
        firstName,
        lastName,
        email,
      };

      const token = generateToken(payload);

      //   Send the token

      return res.status(200).json({ message: "login sukses", token });
    } catch (error) {
      next(error);
    }
  }

  static async updateAccount(req, res, next) {
    try {
      const updateData = await users.update(req.body, {
        where: { id: req.userData.id },
      });

      //   If no data updated

      if (updateData[0] === 0) {
        return res.status(404).json({ errors: ["account not found"] });
      }

      //   Find the updated data of task
      const data = await users.findOne({
        where: { id: req.userData.id },
      });

      //   send data of inserted data
      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async deleteAccount(req, res, next) {
    try {
      //   Delete data
      let data = await users.destroy({
        where: { id: req.params.id },
      });

      // If data deleted is null
      if (!data) {
        return res.status(404).json({ errors: ["account not found"] });
      }

      // If success
      res.status(200).json({ message: "Success delete account" });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = UsersController;
