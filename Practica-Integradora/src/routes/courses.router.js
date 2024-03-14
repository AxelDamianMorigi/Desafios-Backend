import { Router } from 'express';
import CourseService from '../services/courses.service.js'; 

const router = Router();
const coursesService = new CourseService();


router.get('/', async (req, res) => {
    try {
        const courses = await coursesService.getAllCourses();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const newCourse = await coursesService.saveCourse(req.body);
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
