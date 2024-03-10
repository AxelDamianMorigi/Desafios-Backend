import { Router } from 'express';
import CourseService from '../services/db/courses.service.js'; // Importar el servicio de cursos de la base de datos

const router = Router();
const coursesService = new CourseService();

// Obtener todos los cursos
router.get('/', async (req, res) => {
    try {
        const courses = await coursesService.getAllCourses();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Agregar un nuevo curso
router.post('/', async (req, res) => {
    try {
        const newCourse = await coursesService.createCourse(req.body);
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
