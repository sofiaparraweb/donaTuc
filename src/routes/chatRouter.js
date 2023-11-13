const { Router } = require("express");
const { startChatHandler, getChatHistoryHandler } = require("../handlers/chatHandler");
const chatRouter = Router();

chatRouter.post("/start", startChatHandler);
chatRouter.get("/:userId/history", getChatHistoryHandler);

module.exports = chatRouter;
