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
    res.status(500).json({ error: "Error obteniendo usuarios" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password, email } = req.body;

    let hashedPassword = password;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    const updatedUser = await userModel.updateUser(
      id,
      username,
      hashedPassword,
      email
    );
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error actualizando el usuario", details: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await userModel.deleteUser(id);
    if (deletedUser) {
      res
        .status(200)
        .json({ message: "Usuario eliminado exitosamente", user: deletedUser });
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error eliminando el usuario", details: error.message });
  }
};

module.exports = {
  registerUser,
  getUsers,
  updateUser,
  deleteUser,
};
