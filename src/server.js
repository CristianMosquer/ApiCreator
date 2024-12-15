const express = require('express');
const connectBD = require('./config/database'); // Conectar a la base de datos
const cors = require('cors'); // Para permitir peticiones desde el frontend
const vueloRoutes = require('./routes/vueloRoutes'); // Rutas para vuelos

const app = express();

app.use(cors()); // Configurar CORS para solicitudes desde el frontend
app.use(express.json()); // Middleware para parsear JSON

// Conectar a la base de datos
connectBD();

// Ruta principal
app.get('/', (req, res) => {
    res.send('<h1>BIENVENIDO A API STORE!</h1>');
});

// Rutas para la gestión de vuelos
app.use('/api/vuelo', vueloRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
