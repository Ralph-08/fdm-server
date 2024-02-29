import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Hello from TS sever!" });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on " + process.env.PORT);
});
