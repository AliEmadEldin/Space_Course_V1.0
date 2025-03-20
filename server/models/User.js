const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Fname: {
        type: String,
    },
    Lname: {
        type: String,
    },
    userName: {
        type: String,
    },
    age: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    city: {
        type: String,
    },
    Address: {
        type: String,
    },
    YearsOfExperiance: {
        type: String,
    },
    school: {
        type: String,
    },
    roll: {
        type: String,
        enum: ['Admin', 'Student', 'Instructor'],
    },
});

module.exports = mongoose.model('User',UserSchema);