//// EXAMPLE CODE
/*import express from "express";

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});*/

//// EXAMPLE CODE -
/*
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
*/

import cors from "cors";
import express from "express";
import bookingRoutes from "./routes/bookingRoutes.js";
import tutorRoutes from "./routes/tutorRoutes.js";
import { isDbEnabled } from "./services/tutorService.js";

const app = express();

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

app.use(
  cors({
    origin: CLIENT_URL,
  })
)

app.use(express.json());

app.get("/api/health", (_req, res)=>{
  res.json({
    ok:true,
    mode: isDbEnabled() ? "Database Enabled" : "Database Disabled"
  })
})

app.use("/api/tutors", tutorRoutes);
app.use("/api/bookings", bookingRoutes);

export default app;