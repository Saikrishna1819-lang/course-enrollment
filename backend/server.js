import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import courseRoutes from "./routes/courseRoutes.js"
import enrollmentRoutes from './routes/enrollmentRoutes.js'


dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())
app.use('/api/courses',courseRoutes)
app.use('/api/enrollments',enrollmentRoutes)

const PORT=process.env.PORT||5000
const MONGO_URL=process.env.MONGO_URL

mongoose.connect(MONGO_URL).then(()=>{
    app.listen(PORT,()=>{
        console.log("Server running on 5000 port");
        
    })
})
.catch(err=> console.log("Mongodb connection error:",err)
)


