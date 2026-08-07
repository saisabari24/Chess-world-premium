import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API proxy routes
  app.get("/api/gallery", async (req, res) => {
    try {
      const response = await fetch("https://gallery.chessworldindia.com/");
      if (!response.ok) {
        return res.status(response.status).json({ error: "Failed to fetch gallery events" });
      }
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.error("Gallery API Error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.get("/api/gallery/event/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const response = await fetch(`https://gallery.chessworldindia.com/?event=${slug}`);
      if (!response.ok) {
        return res.status(response.status).json({ error: "Failed to fetch event details" });
      }
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.error("Gallery Event API Error:", err);
      res.status(500).json({ error: "Internal Server Error" });
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
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
