const mongoose = require('mongoose');

const collectionName = 'students';

const stringTypeSchemaUniqueRequired = {
    type: String,
    unique: true,
    required: true
};

const numberTypeSchemaRequired = {
    type: Number,
    required: true
};

const studentSchema = new mongoose.Schema({
    name: stringTypeSchemaUniqueRequired,
    lastName: stringTypeSchemaUniqueRequired,
    age: numberTypeSchemaRequired,
    id: stringTypeSchemaUniqueRequired,
    courses: {
        type: [String],
        default: []
    }
});

const Student = mongoose.model('Student', studentSchema, collectionName);

module.exports = Student;
