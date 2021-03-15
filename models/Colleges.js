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
    yearFounded : {
        type: Number,
        required : true
    },
    city :{
        type : String,
        required : true
    },
    state :{
        type : String,
        required : true
    },
    country :{
        type : String,
        required : true
    },
    numberOfStudents :{
        type : Number,
        required : true
    },
    courses :{
        type : String,
        required : true
    }
});

const CollgModel = mongoose.model('colleges', oneshotAi);

module.exports = CollgModel ;