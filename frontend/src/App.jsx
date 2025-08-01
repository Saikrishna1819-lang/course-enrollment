import CourseList from "./components/CourseList"
import React from "react"

const App=()=>{
  return(
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Course Enrollement Portal</h1>
      <CourseList/>

    </div>
  )
}

export default App