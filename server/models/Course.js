const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    category: {
        type: String,
    },
    description: {
        type: String,
    },
    language: {
        type: String,
    },
    document: {
        type: String,
    },
    video: {
        type: String,
    },
    price: {
        type: String,
        enum:['Free','Paid'],
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
    }
})
