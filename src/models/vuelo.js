const mongoose = require("mongoose");

const vueloSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  destino: { type: String, required: true },
  fecha: { type: Date, required: true },
  horario: { type: String, required: true },
  numeroAsientos: { type: Number, required: true },
  asientosDisponibles: { type: Number, required: true },
});

const Vuelo = mongoose.model("Vuelo", vueloSchema);

module.exports = Vuelo;
