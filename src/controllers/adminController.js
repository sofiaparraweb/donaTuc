const { User, Publication, Comment } = require("../db");
const { Op } = require("sequelize");

// Handler para obtener la lista de usuarios
const getUsersList = async () => {
  const usersList = await User.findAll({
    include: [
      {
        model: Role,
        through: { attributes: [] },
      },
     
    ],
  });

  return usersList;
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
