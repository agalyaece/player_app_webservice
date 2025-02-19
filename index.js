import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import homeRoutes from "./routes/home.route.js";
import matchRoutes from "./routes/matches.route.js"
import fantasyRoutes from "./routes/fantasy.route.js";



dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const corsOption = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOption))

app.use("/home", homeRoutes)
app.use("/matches", matchRoutes)
app.use("/fantasy", fantasyRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log(`server is running on port ${PORT}`)
})