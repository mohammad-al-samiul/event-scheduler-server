import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"] }));

// app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
