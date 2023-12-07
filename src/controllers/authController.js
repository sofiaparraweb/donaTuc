// controllers/AuthController.js

const { User } = require("../db");

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

  // Buscar al usuario por su email
  const user = await User.findOne({ where: { email } });

  // Si no se encuentra el usuario, mostrar mensaje de registro
  if (!user) {
    throw new Error("User not found. Please register to login");
  }

  // Verificar la contraseña
  if (user.password !== password) {
    throw new Error("Invalid email or password");
  }

  // Retornar los datos del usuario si todo es correcto
  return user ;
}

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
