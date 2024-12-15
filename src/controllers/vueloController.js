const vueloService = require("../services/vueloService");

// Crear un nuevo vuelo
const createVuelo = async (req, res) => {
  try {
    const vuelo = await vueloService.createVuelo(req.body); // Usamos el servicio para crear un vuelo
    res.status(201).json(vuelo); // Vuelo creado con éxito
  } catch (error) {
    res.status(400).json({ error: error.message }); // Manejo de errores
  }
};

// Obtener todos los vuelos
const getAllVuelos = async (req, res) => {
  try {
    const vuelos = await vueloService.getAllVuelos(); // Usamos el servicio para obtener los vuelos
    res.json(vuelos); // Devuelve todos los vuelos
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejo de errores en caso de fallo
  }
};

module.exports = { createVuelo, getAllVuelos };
