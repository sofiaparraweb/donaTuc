const { User, Publication, Comment, Role } = require("../db");
const { Op } = require("sequelize");

console.log("Valor de Role después de la importación:", Role);

// Handler para obtener la lista de usuarios
const getUsersList = async () => {
  try {
    console.log("Valor de User antes de findAll:", User);
    const users = await User.findAll();
    
    // Verificar si se encontraron usuarios
    if (!users || users.length === 0) {
      throw new Error("No se encontraron usuarios");
    }

    return users;
  } catch (error) {
    console.log("Error al intentar findAll:", error);
    throw error; // Lanzar el error para manejarlo en la función de manejo
  }
};

// Handler para verificar una cuenta de usuario
const verifyAccount = async (userId) => {
  const user = await User.findByPk(userId);

  if (user) {
    user.verified = true;
    await user.save();
    return user;
  } else {
    throw new Error("User not found");
  }
};

// Handler para desactivar una cuenta de usuario
const deactivateAccount = async (userId) => {
  const user = await User.findByPk(userId);

  if (user) {
    user.active = false;
    await user.save();
    return user;
  } else {
    throw new Error("User not found");
  }
};

// Handler para revisar las publicaciones
const reviewPublications = async () => {
  const publications = await Publication.findAll({
    include: [
      {
        model: Comment,
      },
    ],
  });

  return publications;
};

// Handler para asignar un rol a un usuario
const assignRole = async (userId, roleId) => {
  const user = await User.findByPk(userId);

  if (user) {
    await user.addRol(roleId);
    return user;
  } else {
    throw new Error("User not found");
  }
};

// Handler para quitar un rol a un usuario
const removeRole = async (userId, roleId) => {
  const user = await User.findByPk(userId);

  if (user) {
    await user.removeRol(roleId);
    return user;
  } else {
    throw new Error("User not found");
  }
};

// // Handler para obtener estadísticas
// const getStatistics = async () => {
//   // Lógica para obtener estadísticas
//   // ...

//   return statistics;
// };

module.exports = {
  getUsersList,
  verifyAccount,
  deactivateAccount,
  reviewPublications,
  assignRole,
  removeRole,
//   getStatistics,
};
