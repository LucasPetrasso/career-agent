import express from "express";
const app = express();
app.use(express.json());
app.get("/api/health", (request, response) => {
    response.status(200).json({
        status: "ok",
        message: "Career Agent API is running"
    });
});
export default app;
