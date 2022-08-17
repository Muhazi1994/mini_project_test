const { comments, events, users } = require("../models");

class Comments {
  static async getAllComments(req, res, next) {
    try {
      const data = await comments.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      if (data.length === 0) {
        return res.status(404).json({ errors: ["Comment not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  static async getDetailComment(req, res, next) {
    try {
      const data = await comments.findOne({
        where: { id: req.params.id },
      });
      console.log(data);

      if (!data) {
        return res.status(404).json({ errors: ["Comment is empty"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  static async createComment(req, res, next) {
    try {
      const newData = await comments.create(req.body);

      const data = await comments.findOne({
        where: {
          id: newData.id,
        },
        attributes: { exclude: ["userId", "eventId"] },
        include: [
          {
            model: users,
          },
          {
            model: events,
          },
        ],
      });

      res.status(201).json({
        data: data,
        message: ["Congrats! You have successfully submitted a comment"],
      });

      next();
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  static async deleteComment(req, res, next) {
    try {
      let data = await comments.destroy({ where: { id: req.params.id } });

      if (!data) {
        return res.status(404).json({ errors: ["Comment not found"] });
      }

      res
        .status(200)
        .json({ data: data, message: ["Success delete your comment!"] });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
}

module.exports = Comments;
