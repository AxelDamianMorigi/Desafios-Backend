const Course = require("../db/models/courses.js");

export default class CourseService {
    constructor() {
        console.log("Working courses with Database persistence in mongodb");
    }

    getAll = async () => {
        let courses = await Course.find();
        return courses.map(course => course.toObject());
    }

    save = async (courseData) => {
        try {
            const newCourse = new Course(courseData);
            await newCourse.save();
            return newCourse.toObject();
        } catch (error) {
            console.error("Error saving course:", error);
            return null;
        }
    }
}
