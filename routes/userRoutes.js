const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticateToken } = require("../middleware/authMiddleware");

// Ruta para registrar usuarios
router.post("/register", userController.registerUser);

// Ruta para obtener usuarios (protegida por autenticación)
router.get("/", authenticateToken, userController.getUsers);

// Ruta para actualizar usuario
router.put("/:id", authenticateToken, userController.updateUser);

// Ruta para eliminar usuarios
router.delete("/:id", authenticateToken, userController.deleteUser);

//Ruta protegida
router.get("/profile", authenticateToken, (req, res) => {
  res.json({ message: "Perfil de usuario", user: req.user });
});

module.exports = router;
