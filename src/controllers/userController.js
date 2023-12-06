// controllers/userController.js
require("dotenv").config();
const { User, Role } = require("../db");
const cloudinary = require('cloudinary').v2;
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
console.log("Valor de User después de la importación:", User);

// Controller para obtener un usuario por ID
const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id, {
      include: [Role],
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
      include: [Role],
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

      // Aplicar las actualizaciones a los campos permitidos
      if (data.fullName) {
          user.fullName = data.fullName;
      }

      if (data.birthDate) {
          user.birthDate = data.birthDate;
      }

      if (data.phone) {
          user.phone = data.phone;
      }

      // Manejar la carga y actualización de imágenes con Cloudinary
      if (data.image) {
          const result = await cloudinary.uploader.upload(data.image, { public_id: `image_${uuidv4()}` });
          user.image = result.secure_url;
      }

      // Guardar los cambios en la base de datos
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
// const getAllUsers = async () => {
//   try {
//     const users = await User.findAll(
//     //   {
//     //   include: [Role],
//     // }
//     );
//     return users;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

const getAllUsers = async () => {
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
// Controller para asignar un rol a un usuario
const assignUserRole = async (id, roleId) => {
  try {
    const user = await User.findByPk(id);
    const role = await Role.findByPk(roleId);

    if (!user || !role) {
      throw new Error("Usuario o rol no encontrado");
    }

    user.roleId = roleId; // Asignar el nuevo roleId al usuario
    await user.save();

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
