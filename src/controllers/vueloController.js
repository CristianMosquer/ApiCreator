const vueloService = require("../services/vueloService");

// Crear un nuevo vuelo
const createVuelo = async (req, res) => {
  try {
    const vuelo = await vueloService.createVuelo(req.body);
    res.status(201).json(vuelo); // Vuelo creado con éxito
  } catch (error) {
    res.status(400).json({ error: error.message }); // Manejo de errores
  }
};

// Obtener todos los vuelos
const getAllVuelos = async (req, res) => {
  try {
    const vuelos = await vueloService.getAllVuelos();
    res.json(vuelos); // Devuelve todos los vuelos
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createVuelo, getAllVuelos };
