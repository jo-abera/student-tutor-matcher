import express from "express";
import { getAllTutors, getSingleTutor } from "../controllers/tutorController.js";
const router = express.Router();

router.get("/", getAllTutors);
router.get("/:id", getSingleTutor);


export default router;