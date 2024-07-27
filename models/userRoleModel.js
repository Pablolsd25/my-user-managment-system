// models/userRoleModel.js
const pool = require("../config/db");

const assignRoleToUser = async (userId, roleId) => {
  const query = "INSERT INTO user_roles (user_id, role_id) VALUES ($1, $2)";
  const values = [userId, roleId];
  await pool.query(query, values);
};

module.exports = {
  assignRoleToUser,
};
