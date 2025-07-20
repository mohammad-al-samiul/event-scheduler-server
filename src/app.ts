import express, { Application, Request, Response } from "express";
import cors from "cors";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import router from "./app/routes";
import notFound from "./app/middleware/notFound";
const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://event-scheduler-client.vercel.app",
    ],
  })
);

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
