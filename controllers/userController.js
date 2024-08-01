const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const registerUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.createUser(username, hashedPassword, email);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error registrando el usuario" });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error obteniendo usuarios:", error);
    res
      .status(500)
      .json({ error: "Error obteniendo usuarios", details: error.message });
  }
};

module.exports = {
  registerUser,
  getUsers,
};
