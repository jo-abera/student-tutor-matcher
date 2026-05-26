import { createBooking, getBookings } from "../services/bookingService.js";
import { getTutorsById } from "../services/tutorService.js";

export const getAllBookings = async (_req, res) => {
  try {
    const bookings = await getBookings();
    res.json(bookings);
  } catch (_error) {
    res.status(500).json({ message: "Failed to load bookings" });
  }
};

export const createTutorBooking = async (req, res) => {
  try {
    const { tutorId, studentName, studentEmail, date, timeSlot, notes } = req.body;

    if (!tutorId || !studentName || !studentEmail || !date || !timeSlot) {
      return res.status(400).json({ message: "Please complete all required fields" });
    }
    const tutor = await getTutorsById(tutorId);
    if (!tutor) {
      return res.status(404).json({ message: "Selected tutor does not exist" });
    }

    const booking = await createBooking({
      tutorId,
      tutorName: tutor.name,
      studentName,
      studentEmail,
      date,
      timeSlot,
      notes: notes || ""
    });
    res.status(201).json(booking);
  } catch (_error) {
    res.status(500).json({ message: "Could not create booking" });
  }
};
