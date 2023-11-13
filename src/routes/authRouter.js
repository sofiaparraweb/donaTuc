const { Router } = require("express");
const { loginHandler, registerHandler, logoutHandler } = require("../handlers/authHandler");
const authRouter = Router();

authRouter.post("/login", loginHandler);
authRouter.post("/register", registerHandler);
authRouter.post("/logout", logoutHandler);

module.exports = authRouter;
