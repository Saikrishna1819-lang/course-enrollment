const BASE_URL=import.meta.env.VITE_BACKEND_URL
import axios from 'axios'

export const fetchCourses=async()=>{

    const {data}=await axios.get(BASE_URL+'/api/courses')
    return data

}

export const fetchEnrollments=async()=>{
    const {data}=await axios.get(BASE_URL+'/api/enrollments/me')
    return data
}

export const enrollCourse=async(courseId)=>{
    const {data}=await axios.post(BASE_URL+'/api/enrollments',{courseId})
    return data
}
