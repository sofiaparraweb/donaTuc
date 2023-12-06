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
userRouter.get("/:userId", getUserByIdHandler); //funciona
userRouter.get("/email/:email", getUserByEmailHandler); //funciona
userRouter.put("/:userId/edit", editUserHandler); //funciona
userRouter.delete("/:userId", deleteUserHandler); //funciona
userRouter.get("/", getAllUsersHandler); //funciona
userRouter.put("/:userId/assign-role", assignUserRoleHandler);

module.exports = userRouter;
