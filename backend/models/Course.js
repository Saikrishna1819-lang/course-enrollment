import mongoose from "mongoose";

const courseSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    instructor:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    Duration:{
        type:String,
        required:true,
    },
})

export default mongoose.model(Course,courseSchema)
