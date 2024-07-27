// models/userModel.js
const pool = require("../config/db");

const createUser = async (username, password, email) => {
  const query =
    "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *";
  const values = [username, password, email];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Aquí puedes añadir más funciones para obtener, actualizar y eliminar usuarios

module.exports = {
  createUser,
};
