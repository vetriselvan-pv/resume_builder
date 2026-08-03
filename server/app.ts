import express from "express";
import careerPackageRoutes from "./routes/careerPackageRoutes";
import { env } from "./config/env";
import { success } from "zod";

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

app.get("/version", (req, res) => {
  return res.json({
    success: true,
    message: "career application ai studio",
    build: "003",
  });
});

export default app;
