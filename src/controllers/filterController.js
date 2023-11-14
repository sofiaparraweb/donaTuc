// controllers/FilterController.js

const { Publication } = require("../db");
const { Op } = require("sequelize");

// Controlador para obtener publicaciones filtradas
const getFilteredPublications = async (req, res) => {
  const { type, foundationId } = req.params;
  const { order } = req.query;

  try {
    let filteredPublications;

    if (type) {
      filteredPublications = await Publication.findAll({
        where: { type },
      });
    } else if (foundationId) {
      filteredPublications = await Publication.findAll({
        where: { foundationId },
      });
    } else if (order === "asc") {
      filteredPublications = await Publication.findAll({
        order: [["title", "ASC"]],
      });
    } else if (order === "desc") {
      filteredPublications = await Publication.findAll({
        order: [["title", "DESC"]],
      });
    } else {
      // Filtro por fecha de publicación por defecto
      filteredPublications = await Publication.findAll({
        order: [["createdAt", "DESC"]],
      });
    }

    res.status(200).json(filteredPublications);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getFilteredPublications,
};
