const mongoose = require('mongoose');

const collectionName = 'courses';

const stringTypeSchemaUniqueRequired = {
    type: String,
    unique: true,
    required: true
};

const stringTypeSchemaNonUniqueRequired = {
    type: String,
    required: true
};

const courseSchema = new mongoose.Schema({
    title: stringTypeSchemaUniqueRequired,
    description: stringTypeSchemaNonUniqueRequired,
    teacherName: stringTypeSchemaNonUniqueRequired,
    students: {
        type: [String],
        default: []
    }
});

const Course = mongoose.model('Course', courseSchema, collectionName);

module.exports = Course;
