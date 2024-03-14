import { Router } from 'express';
import StudentService from '../services/students.service.js'; 

const router = Router();
const studentService = new StudentService();


router.get('/', async (req, res) => {
    try {
        const students = await studentService.getAllStudents();
        res.json(students);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener los estudiantes." });
    }
});


router.post('/', async (req, res) => {
    try {
        const newStudent = await studentService.createStudent(req.body);
        res.status(201).json(newStudent);
    } catch (error) {
        console.error(error);
        res.status(400).send({ error: error, message: "No se pudo guardar el estudiante." });
    }
});

export default router;
