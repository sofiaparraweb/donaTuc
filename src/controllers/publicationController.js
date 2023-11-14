// controllers/publicationController.js

const { Publication } = require("../db");

// Controller para crear una nueva publicación
const createPublication = async (title, username, description, quantity, type) => {
  try {
    const newPublication = await Publication.create({
      title,
      username,
      description,
      quantity,
      type,
    });

    return newPublication;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Controller para editar una publicación
const editPublication = async (id, title, username, description, quantity, type) => {
  try {
    const publication = await Publication.findByPk(id);

    if (!publication) {
      throw new Error("Publicación no encontrada");
    }

    publication.title = title;
    publication.username = username;
    publication.description = description;
    publication.quantity = quantity;
    publication.type = type;

    await publication.save();

    return publication;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Controller para eliminar una publicación
const deletePublication = async (id) => {
  try {
    const publication = await Publication.findByPk(id);

    if (!publication) {
      throw new Error("Publicación no encontrada");
    }

    await publication.destroy();

    return { message: "Publicación eliminada correctamente" };
  } catch (error) {
    throw new Error(error.message);
  }
};

// Controller para banear una publicación
const banPublication = async (id) => {
  try {
    const publication = await Publication.findByPk(id);

    if (!publication) {
      throw new Error("Publicación no encontrada");
    }

    // Lógica para banear la publicación (cambiar el estado, agregar un flag, etc.)

    return { message: "Publicación baneada correctamente" };
  } catch (error) {
    throw new Error(error.message);
  }
};

// Controller para obtener todas las publicaciones
const getPublications = async () => {
  try {
    const publications = await Publication.findAll();

    return publications;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createPublication,
  editPublication,
  deletePublication,
  banPublication,
  getPublications,
};
