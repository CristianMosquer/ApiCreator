const vueloRepo = require("../repositories/vueloRepository");

// Crear un nuevo vuelo
const createVuelo = async (vueloData) => {
  return await vueloRepo.createVuelo(vueloData);
};

// Obtener todos los vuelos
const getAllVuelos = async () => {
  return await vueloRepo.getAllVuelos();
};

// Obtener un vuelo por ID
const getVueloById = async (id) => {
  return await vueloRepo.getVueloById(id);
};

// Actualizar un vuelo por ID
const updateVuelo = async (id, updatedVuelo) => {
  return await vueloRepo.updateVuelo(id, updatedVuelo);
};

module.exports = {
  createVuelo,
  getAllVuelos,
  getVueloById,
  updateVuelo,
};
