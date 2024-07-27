// controllers/authController.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  // Aquí puedes añadir la lógica para autenticar al usuario
};

module.exports = {
  loginUser,
};
