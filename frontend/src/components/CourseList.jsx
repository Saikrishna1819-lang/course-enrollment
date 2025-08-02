import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import { enrollCourse, fetchCourses, fetchEnrollments } from '../services/api';

const CourseList = () => {
  const [allCourses, setAllCourses] = useState([]);         
  const [enrolledCourses, setEnrolledCourses] = useState([]); 
  const [displayedCourses, setDisplayedCourses] = useState([]); 
  const [loading, setLoading] = useState(true);

  const handleEnroll = async (courseId) => {
    try {
      await enrollCourse(courseId);
     
      const updatedEnrollments = await fetchEnrollments();
      setEnrolledCourses(updatedEnrollments);
    } catch (error) {
      console.error("Enrollment failed", error.response?.data?.message || error.message);
    }
  };

  const loadData = async () => {
    try {
      setLoading(true);
      const courses = await fetchCourses();
      const enrollments = await fetchEnrollments();
      setAllCourses(courses);
      setEnrolledCourses(enrollments);
      setDisplayedCourses(courses);
    } catch (error) {
      console.error("Error loading data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAllCourses = () => {
    setDisplayedCourses(allCourses);
  };

  const handleMyCourses = () => {
    const enrolledIds = enrolledCourses.map((e) => e._id);
    const filtered = allCourses.filter((course) => enrolledIds.includes(course._id));
    setDisplayedCourses(filtered);
  };

  useEffect(() => {
    loadData();
  }, []);

  const enrolledIds = enrolledCourses.map((e) => e._id);

  return (
    <>
      <div className="gap-5 flex mb-10 justify-center">
        <button onClick={handleMyCourses} className="bg-pink-400 px-6 py-2 rounded-lg hover:bg-pink-600">
          My Courses
        </button>
        <button onClick={handleAllCourses} className="bg-pink-400 px-6 py-2 rounded-lg hover:bg-pink-600">
          All Courses
        </button>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 w-[500px] sm:w-auto text-white'>
        {
          loading ? (
            <p className='text-center text-gray-600 col-span-full'>Loading courses...</p>
          ) : displayedCourses.length === 0 ? (
            <p className='text-center text-gray-600 col-span-full'>No courses found.</p>
          ) : (
            displayedCourses.map((course) => (
              <CourseCard
                key={course._id}
                course={course}
                enrolled={enrolledIds.includes(course._id)}
                onEnroll={handleEnroll}
              />
            ))
          )
        }
      </div>
    </>
  );
};

export default CourseList;
