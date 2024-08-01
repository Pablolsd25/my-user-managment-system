const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/users", userRoutes); // Monta las rutas de usuarios bajo el prefijo '/users'
app.use("/auth", authRoutes); // Monta las rutas de autenticación bajo el prefijo '/auth'

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
