const mongoose = require('mongoose');
const ContestSchema = new mongoose.Schema({
    question: {type:String
        ,
        required: [
            true,
            "question is required"
        ],
        minLength: [5, "question me have to be at least 3 characters."],},
        country1: {type: String 
        ,

        required: [
            true,
            "Chooseat least two"
        ],
        minLength: [2, "country have to be at least 3 characters."],},
        vote1:{type:Number},

        country2: {type: String ,

        required: [
            true,
            "Chooseat least two"
        ],

        minLength: [2, "country have to be at least 3 characters."],},
        vote2:{type:Number},

    country3: {type: String},
    vote3:{type:Number},

}, { timestamps: true });
module.exports.Contest = mongoose.model('Contest', ContestSchema);
