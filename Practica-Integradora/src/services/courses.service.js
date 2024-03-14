import Course from "../models/courses.js"; 

export default class CourseService {
    constructor() {
        console.log("Trabajando con cursos utilizando persistencia en MongoDB");
    }


    getAllCourses = async () => {
        try {
            const courses = await Course.find();
            return courses;
        } catch (error) {
            console.error("Error al obtener los cursos:", error);
            throw new Error("No se pudo obtener los cursos");
        }
    }


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
