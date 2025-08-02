import CourseList from "./components/CourseList"
import React from "react"

const App=()=>{
  return(
    <div className="min-h-screen bg-[#141414] text-white p-4">
      <div className="w-full items-center border-b border-gray-300 px-6 py-4 mb-10 flex justify-between">
        <h2 className="text-2xl font-semibold">LMS</h2>
        <h2 className="text-2xl font-bold"> Learning Management System</h2>
        <h2 className="tet-xl font-semibold">Welcome</h2>
      </div>
      <div className="text-center mb-6 text-3xl font-bold">
       
      </div>
      <div className="text-center mb-5">
        <h1 className="text-2xl font-bold">Learn. Succed</h1>
        <p className="text-2xl font-bold">Start your Journey Today</p>
      </div>
     
      <CourseList/>

    </div>
  )
}

export default App