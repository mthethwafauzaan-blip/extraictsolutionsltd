import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import http from "http";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProd = process.env.NODE_ENV === "production";

if (isProd) {
  // ✅ PRODUCTION: serve built files
  const distPath = path.resolve(__dirname, "../dist");
  app.use(express.static(distPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
} else {
  // ✅ DEVELOPMENT: use Vite middleware
  const { setupVite } = await import("./vite.js");
  const server = http.createServer(app);
  await setupVite(server, app);

  server.listen(PORT, () => {
    console.log(`Dev server running on port ${PORT}`);
  });
  return;
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
