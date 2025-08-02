
Course Enrollment App – MERN Stack

This is a simple Course Listing & Student Enrollment module developed using the MERN stack (MongoDB, Express.js, React.js, Node.js).
It allows a dummy student to view available courses, check their enrollment status, and enroll in new courses.



 Live Demo

 🔗: [https://course-enrollment-frontend.onrender.com]




Tech Stack

- Frontend: React.js, Axios, Vite
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- Deployment: Render (Backend & optionally Frontend)



 Folder Structure



course-enrollment-app/
├── backend/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ── components/
|   |   __services/
|   |
│   └── vite.config.js
└── README.md





 Features

-  View all available courses
-  Check if the student is already enrolled
-  Enroll into a course using a button
-  Dummy student authentication (hardcoded student ID)
-  Deployed using Render with MongoDB Atlas as the database

---

 Getting Started Locally

1️ Clone the Repository


git clone  https://github.com/Saikrishna1819-lang/course-enrollment.git
cd course-enrollment




 Setup Backend

cd backend
npm install


Create a `.env` file inside the `backend/` folder:


PORT=5000
MONGO_URL=mongodb+srv://krishnasai69219:QfvZnGpW3jht9a45@namastenode.ufpxgel.mongodb.net/course-enrollment?retryWrites=true&w=majority



Start the backend server:


npm start



Setup Frontend


cd ../frontend
npm install


Create a `.env` file inside the `frontend/` folder:

VITE_API_URL=http://localhost:5000


Start the frontend app:


npm run dev

Your React app will run at `http://localhost:5173`



 API Endpoints

### Courses

* `GET /api/courses`
  Fetch all available courses

### Enrollments

* `GET /api/enrollments/me`
  Get enrollments for the dummy student

* `POST /api/enrollments`
  Enroll the dummy student into a course
  **Request Body**:

  ```json
  {
    "courseId": "course_id_here"
  }
  ```

---

##  Dummy Student Details

* The backend uses a hardcoded dummy student ID:
  `"dummyStudent123"`
* All enrollment actions are linked to this student.

---

##  Environment Variables Summary

### Backend `.env`


PORT=5000
MONGO_URL=mongodb+srv://krishnasai69219:QfvZnGpW3jht9a45@namastenode.ufpxgel.mongodb.net/course-enrollment?retryWrites=true&w=majority

```

### Frontend `.env`

```env
VITE_API_URL=http://localhost:5000
```

> In production, use your deployed backend URL in `VITE_API_URL`.

---

##  What I Learned

* How to build and deploy a full-stack MERN app
* Managing relationships between collections in MongoDB
* Connecting frontend and backend using REST APIs
* Deploying with environment variables and handling CORS
* Practical experience working with real-world project structure and hosting

---




