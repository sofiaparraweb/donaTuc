const { Router } = require("express");
const {
  createPublicationHandler,
  getAllPublicationsHandler,
  commentOnPublicationHandler,
  reportPublicationHandler,
} = require("../handlers/publicationHandler");

const publicationRouter = Router();

// Rutas para las publicaciones
publicationRouter.post("/", createPublicationHandler);
publicationRouter.get("/", getAllPublicationsHandler);
publicationRouter.post("/:publicationId/comment", commentOnPublicationHandler);
publicationRouter.post("/:publicationId/report", reportPublicationHandler);

module.exports = publicationRouter;
