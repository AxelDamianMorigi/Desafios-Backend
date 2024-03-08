import { Router } from 'express';
import CourseService from '../services/db/courses.service.js';

const router = Router();
const coursesService = new CourseService();

router.get('/', async (req, res) => {
    try {
        const courses = await coursesService.getAll();
        res.json(courses);
    } catch (error) {
        console.error("Error al obtener todos los cursos:", error);
        res.status(500).json({ message: "Error al obtener todos los cursos" });
    }
});

router.post('/', async (req, res) => {
    const { title, description, teacherName } = req.body;
    try {
        const newCourse = await coursesService.save({ title, description, teacherName });
        res.status(201).json(newCourse);
    } catch (error) {
        console.error("Error al crear un nuevo curso:", error);
        res.status(500).json({ message: "Error al crear un nuevo curso" });
    }
});

export default router;
