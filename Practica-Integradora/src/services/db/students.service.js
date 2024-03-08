import fs from 'fs';
import path from 'path';

const studentsFilePath = path.join(new URL('.', import.meta.url).pathname, 'data', 'students.json');

function readStudentsFromFile() {
    try {
        const data = fs.readFileSync(studentsFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading students data:', error);
        return [];
    }
}

function writeStudentsToFile(students) {
    try {
        fs.writeFileSync(studentsFilePath, JSON.stringify(students, null, 2));
    } catch (error) {
        console.error('Error writing students data:', error);
    }
}

export default class StudentsService {
    constructor() {}

    async create(studentData) {
        const students = readStudentsFromFile();
        const newStudent = { id: Date.now().toString(), ...studentData };
        students.push(newStudent);
        writeStudentsToFile(students);
        return newStudent;
    }

    async getAll() {
        return readStudentsFromFile();
    }

    async getById(studentId) {
        const students = readStudentsFromFile();
        return students.find(student => student.id === studentId);
    }

    async update(studentId, newData) {
        const students = readStudentsFromFile();
        const index = students.findIndex(student => student.id === studentId);
        if (index !== -1) {
            students[index] = { ...students[index], ...newData };
            writeStudentsToFile(students);
            return students[index];
        }
        return null;
    }

    async delete(studentId) {
        const students = readStudentsFromFile();
        const filteredStudents = students.filter(student => student.id !== studentId);
        if (filteredStudents.length !== students.length) {
            writeStudentsToFile(filteredStudents);
            return true;
        }
        return false;
    }
}
