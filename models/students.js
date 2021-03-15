const mongoose = require('mongoose')

const oneshotAi = new mongoose.Schema({
    id : {
        type: Number,
        required : true
    },
    name :{
        type : String,
        required : true
    },
    collegeId : {
        type: Number,
        required : true
    },
    Skills :{
        type : String,
        required : true
    },
    batchYear :{
        type : Number,
        required : true
    }
});

const StudentModel = mongoose.model('students', oneshotAi);

module.exports = StudentModel ;