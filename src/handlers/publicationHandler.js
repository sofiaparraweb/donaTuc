// handlers/publicationHandlers.js

const {
    createPublication,
    editPublication,
    deletePublication,
    banPublication,
    getPublications,
  } = require("../controllers/publicationController");
  
  // Handler para crear una nueva publicación
  const createPublicationHandler = async (req, res) => {
    const { title, username, description, quantity, type } = req.body;
  
    try {
      const newPublication = await createPublication(title, username, description, quantity, type);
      res.status(200).json(newPublication);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Handler para editar una publicación
  const editPublicationHandler = async (req, res) => {
    const { id } = req.params;
    const { title, username, description, quantity, type } = req.body;
  
    try {
      const publication = await editPublication(id, title, username, description, quantity, type);
      res.status(200).json(publication);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Handler para eliminar una publicación
  const deletePublicationHandler = async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await deletePublication(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Handler para banear una publicación
  const banPublicationHandler = async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await banPublication(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Handler para obtener todas las publicaciones
  const getPublicationsHandler = async (req, res) => {
    try {
      const publications = await getPublications();
      res.status(200).json(publications);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    createPublicationHandler,
    editPublicationHandler,
    deletePublicationHandler,
    banPublicationHandler,
    getPublicationsHandler,
  };
  