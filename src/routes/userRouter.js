// routes/userRouter.js
const { Router } = require("express");
const {
  getUserByIdHandler,
  getUserByEmailHandler,
  editUserHandler,
  deleteUserHandler,
  getAllUsersHandler,
  assignUserRoleHandler,
} = require("../handlers/userHandler");

const userRouter = Router();

// Rutas para usuarios
userRouter.get("/:userId", getUserByIdHandler);
userRouter.get("/email/:email", getUserByEmailHandler);
userRouter.put("/:userId/edit", editUserHandler);
userRouter.delete("/:userId", deleteUserHandler);
userRouter.get("/", getAllUsersHandler);
userRouter.put("/:userId/assign-role", assignUserRoleHandler);

module.exports = userRouter;
