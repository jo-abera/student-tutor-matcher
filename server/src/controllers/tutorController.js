/// TEST CONTROLLER CODE
/*
export const getAllTutors = (req, res) => {
  res.json({ message: "Controller works" });
};
*/

/// TEST CONTROLLER CODE - USING SERVICE
/*
import { getTutors } from "../services/tutorService.js";

export const getAllTutors = async (req, res) => {
  const tutors = await getTutors();
  res.json(tutors);
};
*/

import { getTutorsById, getTutors } from "../services/tutorService.js";
export const getAllTutors = async (req, res) => {
  try {
    const tutors = await getTutors(req.query); // Pass query parameters for filtering
    res.json(tutors);
  } catch (_error) {
    res.status(500).json({ message: "Failed to load tutors" });
  }
};

export const getSingleTutor = async (req, res) => {
  try {
    const tutor = await getTutorById(req.params.id);
    if (!tutor) {
      return res.status(404).json({ message: "Tutor not found" });
    }
    res.json(tutor);
  } catch (_error) {
    res.status(500).json({ message: "Failed to load tutor" });
  }
};
