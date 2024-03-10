import mongoose from 'mongoose';

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
    title: {
        ...stringTypeSchemaUniqueRequired,
        minlength: 5,
        maxlength: 100
    },
    description: {
        ...stringTypeSchemaNonUniqueRequired,
        minlength: 10,
        maxlength: 500
    },
    teacherName: {
        ...stringTypeSchemaNonUniqueRequired,
        minlength: 2,
        maxlength: 50
    },
    students: {
        type: [String], // Supongo que los estudiantes se identifican por su ID
        default: [],
    },
});

export default mongoose.model('Course', courseSchema);
