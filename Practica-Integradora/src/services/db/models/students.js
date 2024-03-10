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

const studentSchema = new mongoose.Schema({
    name: {
        ...stringTypeSchemaNonUniqueRequired,
        minlength: 2,
        maxlength: 50
    },
    lastName: {
        ...stringTypeSchemaNonUniqueRequired,
        minlength: 2,
        maxlength: 50
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 99
    },
    id: {
        ...stringTypeSchemaUniqueRequired,
        minlength: 5,
        maxlength: 10
    },
    courses: {
        type: [String], // Supongo que los cursos se identifican por su ID
        default: [],
    },
});

export default mongoose.model('Student', studentSchema);
