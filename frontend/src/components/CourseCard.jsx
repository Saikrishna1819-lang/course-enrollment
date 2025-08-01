import React from 'react'

const CourseCard = ({course,enrolled,onEnroll}) => {
  return (
    <div className='bg-white p-4 rounded shadow-md'>
        <h2 className='text-xl font-semibold mb-1'>{course.title}</h2>
        <p className='text-gray-700 text-sm mb-2'>{course.description}</p>
        <p className='text-sm'><strong>Instructor:</strong>{course.instructor}</p>
        <p className='text-sm'><strong>Duration:</strong>{course.duration}</p>
        <button onClick={()=>{onEnroll(course._id)}}

        disabled={enrolled} className={`mt-3 px-4 py-2 rounded text-white ${enrolled?'bg-gray-400 cursor-not-allowed':'bg-green-500 hover:bg-green-600'}`}>
            {enrolled?"Enrolled":"Enroll"}
        </button>
    </div>
  )
}

export default CourseCard