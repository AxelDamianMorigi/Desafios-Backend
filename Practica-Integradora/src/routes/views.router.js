import { Router } from 'express';
import Users from '../dao/dbManagers/users.js';
import Courses from '../dao/dbManagers/courses.js';

const usersManager = new Users();
const coursesManager = new Courses();

const router = Router();

router.get('/', async (req, res) => {
    try {
        let users = await usersManager.getAll();
        console.log(users);
        res.render('users', { users }); // Renderizamos la vista 'users' y pasamos los datos de usuarios
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).send({ error: error, message: "Error al obtener usuarios" });
    }
});

router.get('/courses', async (req, res) => {
    try {
        let courses = await coursesManager.getAll();
        console.log(courses);
        res.render('courses', { courses }); // Renderizamos la vista 'courses' y pasamos los datos de cursos
    } catch (error) {
        console.error("Error al obtener cursos:", error);
        res.status(500).send({ error: error, message: "Error al obtener cursos" });
    }
});

export default router;
