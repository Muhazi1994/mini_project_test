const { categories } = require("../models");

class Categories {
  async getAllCategories(req, res, next) {
    try {
      let data = await categories.findAll();
      if (data.length === 0) {
        return res.status(404).json({ errors: ["Categories not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  // Get detail categories
  async getDetailCategories(req, res, next) {
    try {
      let data = await categories.findOne({
        where: { id: req.params.id },
      });

      // If categories not exists
      if (!data) {
        return res.status(404).json({ errors: ["categories not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  // Create categories
  async createCategories(req, res, next) {
    try {
      const createData = await categories.create(req.body);

      const data = await categories.findOne({
        where: {
          id: createData.id,
        },
      });

      res.status(201).json({ data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
  async updateCategories(req, res, next) {
    try {
      const updateData = await categories.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (updateData[0] === 0) {
        return res.status(404).json({ errors: ["categories not found"] });
      }
      // Find updated Data
      const data = await categories.findOne({
        where: {
          id: req.params.id,
        },
      });

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async deleteCategories(req, res, next) {
    try {
      let data = await categories.destroy({ where: { id: req.params.id } });

      if (!data) {
        return res.status(404).json({ errors: ["categories not found!"] });
      }
      res.status(200).json({ message: " Success delete categories" });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
}
module.exports = new Categories();
