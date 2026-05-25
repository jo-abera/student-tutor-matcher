import express from "express";
import {createTutorBooking, getAllBookingd} from "../controllers/bookingController.js";

const router = express.Router();

router.get("/", getAllBookings);
router.post("/", createTutorBooking);

export default router;