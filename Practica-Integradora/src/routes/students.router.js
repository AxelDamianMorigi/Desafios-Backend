import express from 'express';
import { Student } from '../services/db/models/students.js'; // Importamos la clase Student

const router = express.Router();
const studentService = new Student();

// Obtener todos los estudiantes
router.get('/', async (req, res) => {
    try {
        const students = await studentService.getAll(); // Llamamos al método getAll del servicio de estudiantes
        res.json(students); // Devolvemos la lista de estudiantes en formato JSON
    } catch (error) {
        console.error("Error al obtener todos los estudiantes:", error);
        res.status(500).json({ error: error, message: "No se pudo obtener los estudiantes" }); // Manejo de errores
    }
});

// Crear un nuevo estudiante
router.post('/', async (req, res) => {
    const { name, lastName, age } = req.body; // Obtenemos los datos del cuerpo de la solicitud
    try {
        const newStudent = await studentService.create({ name, lastName, age }); // Llamamos al método create del servicio de estudiantes
        res.status(201).json(newStudent); // Devolvemos el estudiante creado con el código de estado 201
    } catch (error) {
        console.error("Error al crear un nuevo estudiante:", error);
        res.status(500).json({ error: error, message: "Error al crear un nuevo estudiante" }); // Manejo de errores
    }
});

export default router;
