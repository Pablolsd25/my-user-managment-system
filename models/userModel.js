const db = require("../config/db"); // Asegúrate de que la ruta a tu configuración de base de datos sea correcta
const pool = require("../config/db"); // Asegúrate de que esta ruta sea correcta

const createUser = async (username, password, email) => {
  const result = await pool.query(
    "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *",
    [username, password, email]
  );
  return result.rows[0];
};

const getUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

const getUserByUsername = async (username) => {
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return result.rows[0];
};

const updateUser = async (id, username, password, email) => {
  try {
    const result = await pool.query(
      "UPDATE users SET username = $1, password = $2, email = $3, updated_at = NOW() WHERE id = $4 RETURNING *",
      [username, password, email, id]
    );

    if (result.rows.length === 0) {
      throw new Error("Usuario no encontrado");
    }

    return result.rows[0];
  } catch (error) {
    throw new Error(`Error actualizando el usuario: ${error.message}`);
  }
};

const deleteUser = async (id) => {
  try {
    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      throw new Error("Usuario no encontrado");
    }

    return result.rows[0];
  } catch (error) {
    throw new Error(`Error eliminando el usuario: ${error.message}`);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserByUsername,
  updateUser,
  deleteUser,
};

module.exports = {
  getUserByUsername,
  createUser,
  getUsers,
  updateUser,
  deleteUser,

  // otras funciones si es necesario
};
