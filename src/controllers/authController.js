// controllers/AuthController.js

const { User } = require("../db");
// const { generateToken } = require("../utils/authUtils");

// Controlador para registrar un nuevo usuario
const registerUser = async (fullName, email, password) => {
  if (!fullName || !email || !password) {
    throw new Error("Missing data for user registration");
  }

  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const newUser = await User.create({
    fullName,
    email,
    password, // En un entorno de producción, se debería cifrar la contraseña antes de almacenarla
  });

  return newUser;
};

// Controlador para iniciar sesión
const loginUser = async (email, password) => {
  if (!email || !password) {
    throw new Error("Email and password are required for login");
  }

  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken(user.id);

  return { user, token };
};

// Controlador para cerrar sesión (logout)
const logoutUser = async (userId) => {
  // Aquí puedes realizar cualquier lógica necesaria para cerrar sesión (puede que no sea necesario en tu caso)
  // Puedes invalidar el token o realizar otras acciones según tus requisitos
  return { message: "Logout successful" };
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
