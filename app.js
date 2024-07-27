// app.js
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
