const mongoose =require('mongoose');

const Schema=mongoose.Schema

const PersonSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    dateOB:{
        type: Date,
        required:true
    },
    firstPhase:{
        type: String,
        required: true
    },
    secondPhase:{
        type:String,
        required:true
    },
    Interviewed:{
        type:String,
        required:true
    },
    Score:{
        type:Number,
        required:true
    },
    feedBack:{
        type:String,
        required:true
    },
    Offer:{
        type:String,
        required:true
    },
    hired:{
        type:String,
        required:true
    }
});

const Person =mongoose.model('Person', PersonSchema);
module.exports = Person;