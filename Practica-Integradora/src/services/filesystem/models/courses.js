export default class Course {
    constructor(title, description, teacherName) {
        if (typeof title !== 'string' || title.length < 5 || title.length > 100) {
            throw new Error('El título del curso debe ser una cadena de al menos 5 caracteres y máximo 100 caracteres');
        }
        if (typeof description !== 'string' || description.length < 10 || description.length > 500) {
            throw new Error('La descripción del curso debe ser una cadena de al menos 10 caracteres y máximo 500 caracteres');
        }
        if (typeof teacherName !== 'string' || teacherName.length < 2 || teacherName.length > 50) {
            throw new Error('El nombre del profesor debe ser una cadena de al menos 2 caracteres y máximo 50 caracteres');
        }

        this.title = title;
        this.description = description;
        this.teacherName = teacherName;
        this.students = [];
    }
}
