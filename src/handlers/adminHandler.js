// handlers/AdminHandlers.js

const {
    getUsersList,
    verifyAccount,
    deactivateAccount,
    reviewPublications,
    assignRole,
    removeRole,
    // getStatistics,
  } = require("../controllers/adminController");
  
  // Handler para obtener la lista de usuarios
  const getUsersListHandler = async (req, res) => {
    try {
      const usersList = await getUsersList();
      res.status(200).json(usersList);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Handler para verificar una cuenta de usuario
  const verifyAccountHandler = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const user = await verifyAccount(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Handler para desactivar una cuenta de usuario
  const deactivateAccountHandler = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const user = await deactivateAccount(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Handler para revisar las publicaciones
  const reviewPublicationsHandler = async (req, res) => {
    try {
      const publications = await reviewPublications();
      res.status(200).json(publications);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Handler para asignar un rol a un usuario
  const assignRoleHandler = async (req, res) => {
    const { userId, roleId } = req.params;
  
    try {
      const user = await assignRole(userId, roleId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Handler para quitar un rol a un usuario
  const removeRoleHandler = async (req, res) => {
    const { userId, roleId } = req.params;
  
    try {
      const user = await removeRole(userId, roleId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Handler para obtener estadísticas
//   const getStatisticsHandler = async (req, res) => {
//     try {
//       const statistics = await getStatistics();
//       res.status(200).json(statistics);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   };
  
  module.exports = {
    getUsersListHandler,
    verifyAccountHandler,
    deactivateAccountHandler,
    reviewPublicationsHandler,
    assignRoleHandler,
    removeRoleHandler,
    // getStatisticsHandler,
  };
  