import { Booking } from "../models/Booking.js";
import { isDbEnabled } from "./tutorService.js";

const demoBookings = [];

export const createBooking = async (payload) => {
  if (isDbEnabled()) {
    return Booking.create(payload);
  }
  const booking = {
    id: `booking-${demoBookings.length + 1}`,
    ...payload,
    status: "confirmed",
    createdAt: new Date().toISOString()
  };
  demoBookings.push(booking);
  return booking;
};

export const getBookings = async () => {
  if (isDbEnabled()) {
    return Booking.find().sort({ createdAt: -1 });
  }

  return [...demoBookings].reverse();
};
