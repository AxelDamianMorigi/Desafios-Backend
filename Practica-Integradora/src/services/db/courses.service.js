import { Course } from "./models/courses.js";

export default class CourseService {
    constructor() {
        console.log("Working with courses using Database persistence in MongoDB");
    }

    // Obtener todos los cursos
    getAllCourses = async () => {
        try {
            const courses = await Course.find();
            return courses;
        } catch (error) {
            console.error("Error al obtener los cursos:", error);
            throw new Error("No se pudo obtener los cursos");
        }
    }

    // Guardar un nuevo curso
    saveCourse = async (courseData) => {
        try {
            const newCourse = await Course.create(courseData);
            return newCourse;
        } catch (error) {
            console.error("Error al guardar el curso:", error);
            throw new Error("No se pudo guardar el curso");
        }
    }
}
