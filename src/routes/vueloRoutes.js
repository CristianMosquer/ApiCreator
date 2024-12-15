const express = require("express");
const {
  createVuelo,
  getAllVuelos,
} = require("../controllers/vueloController"); // Importar controladores

const router = express.Router();

// Ruta para crear un vuelo
router.post("/", createVuelo);

// Ruta para obtener todos los vuelos
router.get("/", getAllVuelos);

module.exports = router;
