import { Router } from 'express';
import StudentService from '../services/db/students.service.js'; // Importar el servicio de estudiantes de la base de datos
import CourseService from '../services/db/courses.service.js'; // Importar el servicio de cursos de la base de datos

const router = Router();
const studentService = new StudentService();
const courseService = new CourseService();

router.get('/', async (req, res) => {
    try {
        const students = await studentService.getAllStudents();
        res.render('students', { students });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener la lista de estudiantes." });
    }
});

router.get('/courses', async (req, res) => {
    try {
        const courses = await courseService.getAllCourses();
        res.render('courses', { courses });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener la lista de cursos." });
    }
});

export default router;
