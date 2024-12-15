const Vuelo = require("../models/vueloModel"); // Importar el modelo de vuelo

// Crear un vuelo
const createVuelo = async (vueloData) => {
  const vuelo = new Vuelo(vueloData);
  return await vuelo.save(); // Guarda el vuelo en la base de datos
};

// Obtener todos los vuelos
const getAllVuelos = async () => {
  return await Vuelo.find(); // Devuelve todos los vuelos
};

module.exports = { createVuelo, getAllVuelos };
