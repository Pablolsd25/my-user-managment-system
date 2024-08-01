const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticateToken } = require("../middleware/authMiddleware");

// Ruta para registrar usuarios
router.post("/register", userController.registerUser);

// Ruta para obtener usuarios (protegida por autenticación)
router.get("/", authenticateToken, userController.getUsers);

module.exports = router;
