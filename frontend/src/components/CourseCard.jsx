
import React from 'react';

const CourseCard = ({ course, enrolled, onEnroll }) => {
  return (
    <div className='bg-gray-800 p-4 rounded-xl mb-10 shadow-md'>
      <h2 className='text-xl font-bold mb-1'>{course.title}</h2>
      <p className=' text-gray-300 text-sm mb-2'>{course.description}</p>
      <p className='text-sm mb-1 font-semibold'>
        <strong>Instructor:</strong> {course.instructor}
      </p>
      <p className='text-sm mb-2'>
        <strong>Duration:</strong> {course.duration}
      </p>
      <button
        onClick={() => onEnroll(course._id)}
        disabled={enrolled}
        className={`mt-3 px-6 py-2 rounded text-white font-semibold transition-all ${
          enrolled
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-yellow-500 hover:bg-yellow-600'
        }`}
      >
        {enrolled ? 'Enrolled' : 'Enroll'}
      </button>
    </div>
  );
};

export default CourseCard;

