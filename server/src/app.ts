import express from "express";
import cors from "cors";
import { corsOptions } from "./config/cors.js";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get("/api/health", (request, response) => {
  response.status(200).json({
    status: "ok",
    message: "Career Agent API is running"
  });
});

export default app;