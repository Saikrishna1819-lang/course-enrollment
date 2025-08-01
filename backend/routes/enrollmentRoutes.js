import express from "express"
import Enrollment from "../models/Enrollment.js"
import Course from "../models/Course.js"

const enrollRouter=express.Router()

const DUMMY_EMAIL='dummy@student.com'
enrollRouter.get('/me',async(req,res)=>{
    try {
        const enrollments=await Enrollment.find({studentEmail:DUMMY_EMAIL}).populate("course")
        res.status(200).json(enrollments)
    } catch (error) {
        res.status(500).json({message:"Failed to fetch Data of Enrollments",error})
        
    }
})

enrollRouter.post('/',async(req,res)=>{
    const {courseId}=req.body
    if(!courseId){
        return res.status(400).json({message:"Course Id is required"})
    }

    try {
        const course=await Course.findById(courseId)
        if(!course){
            return res.status(404).json({message:"Course not found"})
        }

        const existing=await Enrollment.findOne({studentEmail:DUMMY_EMAIL,course:courseId})
        if(existing){
            return res.status(409).json({message:"Already enrolled in this course"})
        }

        const enrollment=new Enrollment({
            studentEmail:DUMMY_EMAIL,
            course:courseId
        })
        await enrollment.save()
        res.status(201).json({message:"Enrollment successful",enrollment})
    } catch (error) {
        res.status(500).json({message:"Failed to enroll",error})
    }
})

export default enrollRouter

