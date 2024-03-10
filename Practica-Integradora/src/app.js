import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import expressHandlebars from 'express-handlebars';
import studentRouter from './routes/students.router.js';
import courseRouter from './routes/courses.router.js';
import viewRouter from './routes/views.router.js';

const app = express();

// Configuración del motor de plantillas Handlebars
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware para parsear body JSON y URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de los diferentes recursos
app.use('/students', studentRouter);
app.use('/courses', courseRouter);
app.use('/', viewRouter);

// Configuración del puerto del servidor
const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando en el puerto: " + SERVER_PORT);
});

// Conexión a la base de datos MongoDB
const connectMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/colegio', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log("Conexión exitosa a MongoDB usando Mongoose.");
    } catch (error) {
        console.error("Error al conectar a la base de datos MongoDB:", error);
        process.exit(1);
    }
};
connectMongoDB();
