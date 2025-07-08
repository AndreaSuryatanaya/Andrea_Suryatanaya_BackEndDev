import express, { type Express, type Request, type Response } from "express";
import dotenv from "dotenv";
import { createLead, deleteLead, getLead, getLeads, updateLead } from "./controllers/leadController";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.get("/leads", getLeads);
app.get("/leads/:id", getLead);
app.post("/leads", createLead);
app.put("/leads/:id", updateLead);
app.delete("/leads/:id", deleteLead);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
