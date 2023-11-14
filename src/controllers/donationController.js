// controllers/DonationController.js

const { Donation, User, Foundation } = require("../db");

// Controlador para crear una nueva donación
const createDonation = async (userId, foundationId, amount) => {
  if (!userId || !foundationId || !amount) {
    throw new Error("Missing data for donation creation");
  }

  const user = await User.findByPk(userId);
  const foundation = await Foundation.findByPk(foundationId);

  if (!user || !foundation) {
    throw new Error("User or foundation not found");
  }

  const newDonation = await Donation.create({
    userId,
    foundationId,
    amount,
    status: "Pending", // Puedes ajustar el estado inicial según tus necesidades
  });

  return newDonation;
};

// Controlador para obtener donaciones realizadas por un usuario
const getDonationsByUser = async (userId) => {
  if (!userId) {
    throw new Error("Missing user ID");
  }

  const userDonations = await Donation.findAll({
    where: { userId },
    include: [Foundation], // Puedes incluir más relaciones según tus necesidades
  });

  return userDonations;
};

// Controlador para obtener donaciones recibidas por una fundación
const getDonationsByFoundation = async (foundationId) => {
  if (!foundationId) {
    throw new Error("Missing foundation ID");
  }

  const foundationDonations = await Donation.findAll({
    where: { foundationId },
    include: [User], // Puedes incluir más relaciones según tus necesidades
  });

  return foundationDonations;
};

module.exports = {
  createDonation,
  getDonationsByUser,
  getDonationsByFoundation,
};
