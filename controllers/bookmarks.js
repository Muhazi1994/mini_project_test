const { events, users, bookmarks } = require("../models");
const { Op } = require("sequelize");
const { generateToken } = require("../helpers/jwt");

const pagination = (page, size) => {
  const limit = size ? +size : 4;
  const offset = ((page - 1) * limit) | 0;

  return { limit, offset };
};
const paging = (data, page, limit) => {
  const { count: totalItems, rows: events } = data;
  const currentPage = page ? +page : 1;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, events, totalPages, currentPage };
};

class Bookmarks {
  static async insertBookmarks(req, res, next) {
    try {
      const insertBookmarks = await bookmarks.create({
        userId: req.userData.id,
        eventId: req.params.id,
      });

      return res.status(201).json({ message: "succes add boookmark" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async allBookmarks(req, res, next) {
    try {
      const allBookmarks = await bookmarks.findAll({
        where: { userId: req.userData.id },
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
      console.log(req.userData.id);

      return res.status(201).json({ allBookmarks });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async deleteBookmarks(req, res, send) {
    try {
      let data = await bookmarks.destroy({
        where: { id: req.params.id },
      });
      res.status(200).json({ message: "Success delete Bookmarks" });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = Bookmarks;
