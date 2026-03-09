import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VISAS_FILE = path.join(process.cwd(), "visas.json");

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/visas", async (req, res) => {
    try {
      console.log("Reading visas from:", VISAS_FILE);
      const data = await fs.readFile(VISAS_FILE, "utf-8");
      const parsedData = JSON.parse(data);
      console.log(`Successfully read ${parsedData.length} visas`);
      res.json(parsedData);
    } catch (error) {
      console.error("Error reading visas:", error);
      res.status(500).json({ error: "Failed to read visas data" });
    }
  });

  app.post("/api/visas", async (req, res) => {
    try {
      const visas = req.body;
      await fs.writeFile(VISAS_FILE, JSON.stringify(visas, null, 2));
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to save visas data" });
    }
  });

  app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    // Simple hardcoded admin credentials for demo
    // In a real app, use environment variables and bcrypt
    if (username === "admin" && password === "admin123") {
      res.json({ success: true, token: "mock-admin-token" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
