import React, { useState } from 'react'
import CourseCard from './CourseCard'
const dummyCourses=[
    {
        _id:'1',
        title:'JavaScript Basics',
        description:"Learn the Fundamentals of JavaScript",
        instructor:"John Doe",
        duration:"4 weaks",
    },
      {
    _id: '2',
    title: 'React 101',
    description: 'Introductory course to React.',
    instructor: 'Jane Smith',
    duration: '6 weeks',
  },
]

const CourseList = () => {
    const [courses,setCourses]=useState(dummyCourses)
    const [enrolledCourses,setEnrolledCourses]=useState([])
    const handleEnroll=(courseId)=>{
        setEnrolledCourses((prev)=> [...prev,courseId])

    }

  return (
    <div className='grid md:grid-cols-3 gap-4'>
        {/* <p className='text-center text-gray-600'>Loading courses</p> */}
        {
            courses.map((course)=>(
                <CourseCard
                  
                   key={course._id}
                   course={course}
                   enrolled={enrolledCourses.includes(course._id)}
                   onEnroll={handleEnroll}
                />
            ))
        }

    </div>
  )
}

export default CourseList