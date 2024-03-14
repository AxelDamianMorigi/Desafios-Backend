import Student from "../models/students.js"; 

export default class StudentService {
    constructor() {
        console.log("Trabajando con estudiantes utilizando persistencia en MongoDB");
    }

 
    getAllStudents = async () => {
        try {
            const students = await Student.find();
            return students;
        } catch (error) {
            console.error("Error al obtener los estudiantes:", error);
            throw new Error("No se pudo obtener los estudiantes");
        }
    }

 
    createStudent = async (studentData) => {
        try {
            const newStudent = await Student.create(studentData);
            return newStudent;
        } catch (error) {
            console.error("Error al guardar el estudiante:", error);
            throw new Error("No se pudo guardar el estudiante");
        }
    }

 
    getStudentById = async (studentId) => {
        try {
            const student = await Student.findById(studentId);
            if (!student) {
                throw new Error("Estudiante no encontrado");
            }
            return student;
        } catch (error) {
            console.error("Error al obtener el estudiante por ID:", error);
            throw new Error("No se pudo obtener el estudiante");
        }
    }


    updateStudentById = async (studentId, newData) => {
        try {
            const updatedStudent = await Student.findByIdAndUpdate(studentId, newData, { new: true });
            if (!updatedStudent) {
                throw new Error("Estudiante no encontrado");
            }
            return updatedStudent;
        } catch (error) {
            console.error("Error al actualizar el estudiante por ID:", error);
            throw new Error("No se pudo actualizar el estudiante");
        }
    }


    deleteStudentById = async (studentId) => {
        try {
            const deletedStudent = await Student.findByIdAndDelete(studentId);
            if (!deletedStudent) {
                throw new Error("Estudiante no encontrado");
            }
            return deletedStudent;
        } catch (error) {
            console.error("Error al eliminar el estudiante por ID:", error);
            throw new Error("No se pudo eliminar el estudiante");
        }
    }
}
