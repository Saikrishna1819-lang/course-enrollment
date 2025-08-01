import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  studentEmail: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model("Enrollment", enrollmentSchema);
