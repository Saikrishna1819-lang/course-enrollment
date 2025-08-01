import express from "express"
import Course from "../models/Course.js"

const courseRouter=express.Router()

courseRouter.get('/',async(req,res)=>{
    try {
        
        const courses=await Course.find({})
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({message:"Failed to fetch courses",error})
    }
})

export default courseRouter
