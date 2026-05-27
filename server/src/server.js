import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { ensureSeedTutors, isDbEnabled } from "./services/tutorService.js";

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
const startServer = async () => {
  try {
    if (isDbEnabled()) {
      await mongoose.connect(process.env.MONGO_URI);
      await ensureSeedTutors();
      console.log("Connected to MongoDB");
    } else {
      console.log("MONGO_URI not set. Running without database.");
    }
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};
startServer();

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
