export default class Student {
    constructor(name, lastName, age) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 50) {
            throw new Error('El nombre del estudiante debe ser una cadena de al menos 2 caracteres y máximo 50 caracteres');
        }
        if (typeof lastName !== 'string' || lastName.length < 2 || lastName.length > 50) {
            throw new Error('El apellido del estudiante debe ser una cadena de al menos 2 caracteres y máximo 50 caracteres');
        }
        if (typeof age !== 'number' || age < 18 || age > 99) {
            throw new Error('La edad del estudiante debe ser un número entre 18 y 99');
        }

        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.courses = [];
    }
}
