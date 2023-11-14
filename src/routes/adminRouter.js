const { Router } = require("express");
const {
  getUsersListHandler,
  verifyAccountHandler,
  deactivateAccountHandler,
  reviewPublicationsHandler,
  assignRoleHandler,
  removeRoleHandler,
//   getStatisticsHandler,
} = require("../handlers/adminHandler");

const adminRouter = Router();

// Rutas para el administrador
adminRouter.get("/users", getUsersListHandler);
adminRouter.put("/users/:userId/verify", verifyAccountHandler);
adminRouter.put("/users/:userId/deactivate", deactivateAccountHandler);
adminRouter.get("/publications", reviewPublicationsHandler);
adminRouter.put("/users/:userId/assign-role", assignRoleHandler);
adminRouter.put("/users/:userId/remove-role", removeRoleHandler);
// adminRouter.get("/statistics", getStatisticsHandler);

module.exports = adminRouter;
