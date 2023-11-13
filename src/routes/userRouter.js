const { Router } = require("express");
const {
  registerHandler,
  loginHandler,
  getUserProfileHandler,
  editUserProfileHandler,
  changeUserRoleHandler,
  verifyAccountHandler,
  deactivateAccountHandler,
} = require("../handlers/userHandler");

const userRouter = Router();

// Rutas para usuarios
userRouter.post("/register", registerHandler);
userRouter.post("/login", loginHandler);
userRouter.get("/:userId/profile", getUserProfileHandler);
userRouter.put("/:userId/edit-profile", editUserProfileHandler);
userRouter.put("/:userId/change-role", changeUserRoleHandler);
userRouter.put("/:userId/verify-account", verifyAccountHandler);
userRouter.put("/:userId/deactivate-account", deactivateAccountHandler);

module.exports = userRouter;
