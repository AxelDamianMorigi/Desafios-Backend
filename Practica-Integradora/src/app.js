import express from 'express';
import __dirname from './util.js';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars'; 
import studentRouter from './routes/students.router.js';
import courseRouter from './routes/courses.router.js';
import viewRouter from './routes/views.router.js';
import StudentService from './services/students.service.js';
import CourseService from './services/courses.service.js';

const app = express();


app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');
app.use(express.static(__dirname+'/public'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const studentService = new StudentService();
const courseService = new CourseService();

app.use('/students', studentRouter);
app.use('/courses', courseRouter);
app.use('/', viewRouter);


const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando en el puerto: " + SERVER_PORT);
});


const connectMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/colegio', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conexión exitosa a MongoDB usando Mongoose.");
    } catch (error) {
        console.error("Error al conectar a la base de datos MongoDB:", error);
        process.exit(1);
    }
};

connectMongoDB();
