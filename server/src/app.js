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

import express from "express";
import tutorRoutes from "./routes/tutorRoutes.js";

const app = express();

app.use("/api/tutors", tutorRoutes);

export default app;