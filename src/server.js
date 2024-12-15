require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Usa el puerto de Render o 3000 por defecto.

app.use(express.json()); // Middleware para manejar JSON

// Define tus rutas aquí
app.get('/', (req, res) => {
  res.send('API Creator está funcionando correctamente');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
