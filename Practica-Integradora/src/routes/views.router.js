import { Router } from 'express';
import StudentService from '../services/students.service.js'; 
import CourseService from '../services/courses.service.js';

const router = Router();
const studentService = new StudentService();
const courseService = new CourseService();

router.get('/', async (req, res) => {
    try {
        const students = await studentService.getAllStudents();
        const courses = await courseService.getAllCourses();
        res.render('index', { students, courses }); 
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener la lista de estudiantes y cursos." });
    }
});

export default router;
