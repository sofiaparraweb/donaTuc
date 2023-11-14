// routes/filterRouter.js

const { Router } = require("express");
const { getFilteredPublicationsHandler } = require("../handlers/filterHandler");

const filterRouter = Router();

// Rutas para filtros de publicaciones
filterRouter.get("/date", getFilteredPublicationsHandler); // Filtrar por fecha de publicación
filterRouter.get("/type/:type", getFilteredPublicationsHandler); // Filtrar por tipo
filterRouter.get("/foundation/:foundationId", getFilteredPublicationsHandler); // Filtrar por fundación
filterRouter.get("/alphabetical/asc", getFilteredPublicationsHandler); // Filtrar alfabéticamente ascendente
filterRouter.get("/alphabetical/desc", getFilteredPublicationsHandler); // Filtrar alfabéticamente descendente

module.exports = filterRouter;

