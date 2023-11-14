// handlers/donationHandlers.js

const { createDonation, getDonationsByUser, getDonationsByFoundation } = require("../controllers/donationController");

// Handler para crear una nueva donación
const createDonationHandler = async (req, res) => {
  const { userId, foundationId, amount } = req.body;

  try {
    const newDonation = await createDonation(userId, foundationId, amount);
    res.status(201).json(newDonation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Handler para obtener donaciones realizadas por un usuario
const getDonationsByUserHandler = async (req, res) => {
  const { userId } = req.params;

  try {
    const userDonations = await getDonationsByUser(userId);
    res.status(200).json(userDonations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Handler para obtener donaciones recibidas por una fundación
const getDonationsByFoundationHandler = async (req, res) => {
  const { foundationId } = req.params;

  try {
    const foundationDonations = await getDonationsByFoundation(foundationId);
    res.status(200).json(foundationDonations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createDonationHandler,
  getDonationsByUserHandler,
  getDonationsByFoundationHandler,
};
