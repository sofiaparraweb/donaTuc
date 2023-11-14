// routers/publicationRouter.js

const { Router } = require("express");
const {
  createPublicationHandler,
  editPublicationHandler,
  deletePublicationHandler,
  banPublicationHandler,
  getPublicationsHandler,
} = require("../handlers/publicationHandler");

const publicationRouter = Router();

// Rutas para publicaciones
publicationRouter.post("/", createPublicationHandler);
publicationRouter.put("/:id", editPublicationHandler);
publicationRouter.delete("/:id", deletePublicationHandler);
publicationRouter.put("/:id/ban", banPublicationHandler);
publicationRouter.get("/", getPublicationsHandler);

module.exports = publicationRouter;
