import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    title: {type: String, required: true},
    subjects:[{type: String, required: true}], 
    bio:{type: String,required: true},
    hourlyRate:{type: Number, required: true},
    rating:{type: Number, required: true},
    reviewsCount:{type: Number, required: true},
    lessonsCompleted:{type: Number, default:0},
    location:{type: String, required: true},
    availability:[{type: String, required: true}],
    languages:[{type: String}],
    responseTime:{type:String, required: true},
    image:{type: String, required: true},
    featured:{type: Boolean, default: false}
}, {timestamps: true});

export const Tutor = mongoose.model("Tutor", tutorSchema);  