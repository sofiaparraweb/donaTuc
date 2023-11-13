const { Router } = require("express");
const {
  createDonationHandler,
  getUserDonationsHandler,
  getReceivedDonationsHandler,
  confirmDonationHandler,
} = require("../handlers/donationHandler");

const donationRouter = Router();

// Rutas para las donaciones
donationRouter.post("/", createDonationHandler);
donationRouter.get("/", getUserDonationsHandler);
donationRouter.get("/received", getReceivedDonationsHandler);
donationRouter.put("/:donationId/confirm", confirmDonationHandler);

module.exports = donationRouter;
