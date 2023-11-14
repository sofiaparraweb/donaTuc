const { getFilteredPublications } = require("../controllers/filterController");

// Handler para obtener publicaciones filtradas
const getFilteredPublicationsHandler = async (req, res) => {
  try {
    await getFilteredPublications(req, res);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getFilteredPublicationsHandler,
};
