const { Router } = require("express");
const {
  filterByLocationHandler,
  filterByDateHandler,
  filterAlphabeticallyHandler,
} = require("../handlers/filterHandler");

const filterRouter = Router();

// Rutas para el filtrado de publicaciones
filterRouter.get("/location/:location", filterByLocationHandler);
filterRouter.get("/date", filterByDateHandler);
filterRouter.get("/alphabetical", filterAlphabeticallyHandler);

module.exports = filterRouter;
