import express from "express";
import path from "path";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());

// Absolute path to dist
const distPath = path.resolve(process.cwd(), "dist");

// Serve static assets
app.use(express.static(distPath));

// SPA fallback (THIS IS THE FIX)
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
