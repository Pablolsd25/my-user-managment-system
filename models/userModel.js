const db = require("../config/db"); // Asegúrate de que la ruta a tu configuración de base de datos sea correcta
const pool = require("../config/db"); // Asegúrate de que esta ruta sea correcta

// Función para obtener un usuario por nombre de usuario
const getUserByUsername = async (username) => {
  try {
    const result = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    return result.rows[0]; // Devuelve el primer usuario encontrado
  } catch (error) {
    console.error("Error al obtener el usuario por nombre de usuario:", error);
    throw error;
  }
};

// Otras funciones del modelo
const createUser = async (username, password, email) => {
  try {
    const result = await db.query(
      "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *",
      [username, password, email]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error al crear usuario:", error);
    throw error;
  }
};
const getUsers = async () => {
  try {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw error; // Lanza el error para que el controlador pueda manejarlo
  }
};
module.exports = {
  getUserByUsername,
  createUser,
  getUsers,

  // otras funciones si es necesario
};
