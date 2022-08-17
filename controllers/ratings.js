const { ratings, events, users } = require("../models");

class Ratings {
  static async createRating(req, res, next) {
    try {
      // Create Rating
      const newData = await ratings.create({
        rating: req.body.rating,
        eventId: req.params.id,
        userId: req.userData.id,
        categoryId: req.body.categoryId,
      });
      // Find Data Rating
      const data = await ratings.findOne({
        where: {
          id: newData.id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(201).json({ data, message: ["Success Add Rating"] });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Ratings;
