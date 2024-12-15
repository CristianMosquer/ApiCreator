const express = require("express");
const cors = require("cors");
const connectBD = require("./config/database"); // Conexión a la base de datos
const vueloRoutes = require("./routes/vueloRoutes"); // Rutas para vuelos

const app = express();

app.use(cors()); // Configurar CORS para solicitudes desde el frontend
app.use(express.json()); // Middleware para parsear JSON

// Conectar a la base de datos
connectBD();

// Ruta principal
app.get("/", (req, res) => {
  res.send("<h1>BIENVENIDO A API STORE!</h1>");
});

// Ruta para la gestión de vuelos
app.use("/api/vuelo", vueloRoutes);

module.exports = app;
