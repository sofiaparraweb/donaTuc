const { registerUser, loginUser, logoutUser } = require("../controllers/authController");

// Handler para registrar un nuevo usuario
const registerHandler = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const newUser = await registerUser(fullName, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Handler para iniciar sesión
const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, token } = await loginUser(email, password);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// Handler para cerrar sesión
const logoutHandler = async (req, res) => {
  // En este punto, podrías invalidar el token, limpiar las cookies, o realizar otras acciones según tus necesidades
  try {
    const { userId } = req.params;
    await logoutUser(userId);
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  registerHandler,
  loginHandler,
  logoutHandler,
};
