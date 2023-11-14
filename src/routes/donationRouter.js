const { Router } = require("express");
const { createDonationHandler, getDonationsByUserHandler, getDonationsByFoundationHandler } = require("../handlers/donationHandler");

const donationRouter = Router();

// Rutas para donaciones
donationRouter.post("/create", createDonationHandler); // Crear una nueva donación
donationRouter.get("/user/:userId", getDonationsByUserHandler); // Obtener donaciones realizadas por un usuario
donationRouter.get("/foundation/:foundationId", getDonationsByFoundationHandler); // Obtener donaciones recibidas por una fundación

module.exports = donationRouter;

