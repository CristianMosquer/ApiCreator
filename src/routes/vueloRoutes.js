// src/controllers/vueloController.js
const Vuelo = require("../models/Vuelo"); // Asegúrate de tener el modelo de Vuelo

// Función para crear un vuelo
exports.createVuelo = async (req, res) => {
  try {
    const { nombre, destino, fecha, asientosDisponibles } = req.body;

    // Crear una nueva instancia del vuelo
    const nuevoVuelo = new Vuelo({
      nombre,
      destino,
      fecha,
      asientosDisponibles,
    });

    // Guardar el vuelo en la base de datos
    await nuevoVuelo.save();
    res.status(201).json({ message: "Vuelo creado exitosamente", vuelo: nuevoVuelo });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el vuelo", error });
  }
};

// Función para obtener todos los vuelos
exports.getAllVuelos = async (req, res) => {
  try {
    const vuelos = await Vuelo.find(); // Obtener todos los vuelos de la base de datos
    res.status(200).json(vuelos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los vuelos", error });
  }
};
