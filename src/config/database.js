const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Para cargar las variables de entorno desde .env

dotenv.config(); // Cargar las variables de entorno

const connectBD = async () => {
    try {
        // Conectar a la base de datos usando la URI de MongoDB desde .env
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error.message);
        process.exit(1); // Salir del proceso si hay un error de conexión
    }
};

module.exports = connectBD;
