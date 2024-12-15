const app = require("./app"); // Correctamente importando la aplicación configurada en app.js

const PORT = process.env.PORT || 3000; // Configurando el puerto para el servidor

console.log("Iniciando servidor..."); // Mensaje para depuración
app.listen(PORT, () => {
  console.log(`Servidor está corriendo en http://localhost:${PORT}`);
});
