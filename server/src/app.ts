import express from 'express';
import cors from 'cors';
import { corsOptions } from './config/cors.js';
import careerProfileRouter from "./routes/careerProfile.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/profile", careerProfileRouter);

app.get('/api/health', (request, response) => {
  response.status(200).json({
    status: 'ok',
    message: 'Career Agent API is running',
  });
});

app.use(errorHandler);

export default app;