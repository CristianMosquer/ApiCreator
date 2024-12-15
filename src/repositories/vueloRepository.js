const Vuelo = require("../models/vuelo");

// Crear un nuevo vuelo
const createVuelo = async (vueloData) => {
  return await Vuelo.create(vueloData);
};

// Actualizar un vuelo por ID
const updateVuelo = async (vueloId, updateData) => {
  return await Vuelo.findByIdAndUpdate(vueloId, updateData, { new: true });
};

// Eliminar un vuelo por ID
const deleteVuelo = async (vueloId) => {
  return await Vuelo.findByIdAndDelete(vueloId);
};

// Obtener todos los vuelos
const getAllVuelos = async () => {
  return await Vuelo.find();
};

// Obtener un vuelo por ID
const getVueloById = async (id) => {
  return await Vuelo.findById(id);
};

module.exports = {
  createVuelo,
  updateVuelo,
  deleteVuelo,
  getAllVuelos,
  getVueloById,
};
