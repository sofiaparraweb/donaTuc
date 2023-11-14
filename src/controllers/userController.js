// controllers/userController.js
const { User, Rol } = require("../db");

// Controller para obtener un usuario por ID
const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id, {
      include: [Rol],
    });

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Controller para obtener un usuario por email
const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({
      where: { email },
      include: [Rol],
    });

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Controller para editar un usuario
const editUser = async (id, data) => {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    // Lógica para editar los datos del usuario según la estructura de tu modelo

    await user.save();

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Controller para eliminar un usuario
const deleteUser = async (id) => {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    await user.destroy();

    return { message: "Usuario eliminado correctamente" };
  } catch (error) {
    throw new Error(error.message);
  }
};

// Controller para obtener todos los usuarios
const getAllUsers = async () => {
  try {
    const users = await User.findAll({
      include: [Rol],
    });

    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Controller para asignar un rol a un usuario
const assignUserRole = async (id, roleId) => {
  try {
    const user = await User.findByPk(id);
    const rol = await Rol.findByPk(roleId);

    if (!user || !rol) {
      throw new Error("Usuario o rol no encontrado");
    }

    await user.setRol(rol);

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getUserById,
  getUserByEmail,
  editUser,
  deleteUser,
  getAllUsers,
  assignUserRole,
};
