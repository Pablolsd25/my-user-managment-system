// controllers/userController.js
const userModel = require("../models/userModel");

const registerUser = async (req, res) => {
  const { username, password, email } = req.body;
  // Aquí puedes añadir lógica para validar y hashear la contraseña
  const user = await userModel.createUser(username, password, email);
  res.status(201).json(user);
};

module.exports = {
  registerUser,
};
