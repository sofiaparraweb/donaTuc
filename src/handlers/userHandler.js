// handlers/userHandlers.js
const {
    getUserById,
    getUserByEmail,
    editUser,
    deleteUser,
    getAllUsers,
    assignUserRole,
  } = require("../controllers/userController");
  
  // Handler para obtener un usuario por ID
  const getUserByIdHandler = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const user = await getUserById(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Handler para obtener un usuario por email
  const getUserByEmailHandler = async (req, res) => {
    const { email } = req.params;
  
    try {
      const user = await getUserByEmail(email);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Handler para editar un usuario
  const editUserHandler = async (req, res) => {
    const { userId } = req.params;
    const data = req.body;
  
    try {
      const user = await editUser(userId, data);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Handler para eliminar un usuario
  const deleteUserHandler = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const result = await deleteUser(userId);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Handler para obtener todos los usuarios
  const getAllUsersHandler = async (req, res) => {
    try {
      const users = await getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Handler para asignar un rol a un usuario
  const assignUserRoleHandler = async (req, res) => {
    const { userId } = req.params;
    const { roleId } = req.body;
  
    try {
      const user = await assignUserRole(userId, roleId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    getUserByIdHandler,
    getUserByEmailHandler,
    editUserHandler,
    deleteUserHandler,
    getAllUsersHandler,
    assignUserRoleHandler,
  };
  