// @ts-nocheck


import express from 'express';
import mongoose from 'mongoose';
import studentRouter from './routes/students.router.js';
import courseRouter from './routes/courses.router.js';

const app = express();
const SERVER_PORT = 9090;

// Middleware para manejar solicitudes JSON y URL codificadas
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Declaración de Routers
app.use('/students', studentRouter);
app.use('/courses', courseRouter);

// Iniciar el servidor
app.listen(SERVER_PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${SERVER_PORT}`);
});

// Conexión a la base de datos MongoDB
const connectMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/colegio', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Conexión exitosa a MongoDB usando Mongoose.");
    } catch (error) {
        console.error("Error al conectar a la base de datos MongoDB:", error);
        process.exit(1); // Salir del proceso con código de error
    }
};
connectMongoDB();
