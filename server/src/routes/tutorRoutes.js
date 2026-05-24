////  TEST CODE

/*import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Tutor route works" });
});

export default router;
*/

// TEST CODE - USING CONTROLLER
/*
import express from "express";
import { getAllTutors } from "../controllers/tutorController.js";

const router = express.Router();

router.get("/", getAllTutors);

export default router;
*/

import express from "express";
import { getAllTutors, getSingleTutor } from "../controllers/tutorController.js";

const router = express.Router();

router.get("/", getAllTutors);
router.get("/:id", getSingleTutor);

export default router;
