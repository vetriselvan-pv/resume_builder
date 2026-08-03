import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import careerPackageRoutes from "./routes/careerPackageRoutes";
import { env } from "./config/env";


const app = express(); 

app.use(express.json({ limit: "10mb" }));

app.use("/api/generate-career-package", careerPackageRoutes);

app.post("/api/login", (req, res) => {
  const { password } = req.body;
  if (password === env.APP_PASSWORD) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, error: "Invalid password" });
  }
});

async function startServer() {
  if (env.NODE_ENV !== "production") {
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

  app.listen(Number(env.PORT), "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${env.PORT}`);
  });
}

startServer();
