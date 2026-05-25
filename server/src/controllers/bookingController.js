

import { getTutorsById } from "../services/tutorService.js";

export const getAllBookings = async (_req, res)=> {
    try{
        const boookings = await getAllBookings();
        res.json(bookings);
    }catch(_error){
        res.status(500).json({message: "Failed to load bookings"});
    }
}