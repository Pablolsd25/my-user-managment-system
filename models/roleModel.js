// models/roleModel.js
const pool = require("../config/db");

const createRole = async (name, description) => {
  const query =
    "INSERT INTO roles (name, description) VALUES ($1, $2) RETURNING *";
  const values = [name, description];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Aquí puedes añadir más funciones para obtener, actualizar y eliminar roles

module.exports = {
  createRole,
};
