import express from "express";

import bodyParser from "body-parser";
import cors from "cors";
import vehicleRoute from "./routes/vehicleRoute.js";
import { connectDB } from "./config/db.js";
import "dotenv/config";

const app = express();

connectDB();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/vehicles", vehicleRoute);

app.get("/", (req, res) => {
    res.send("Hello from Homepage.");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
