import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    tutorId: { type: String, required: true },
    tutorName: { type: String, required: true },
    studentName: { type: String, required: true },
    studentEmail: { type: String, required: true },
    date: { type: String, required: true },
    timeSlot: { type: String, required: true },
    notes: { type: String, default: "" },
    status: { type: String, default: "confirmed" }
  },
  { timestamps: true }
);

export const Booking = mongoose.model("Booking", bookingSchema);