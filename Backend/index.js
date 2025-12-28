import { configDotenv } from "dotenv";
import cors from "cors";
configDotenv();
import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import Auth from "./routes/auth.route.js";
import welcomeRoute from "./routes/welcome.route.js";
const port = process.env.PORT;
const app = express();
app.use(urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use(Auth);
app.use(welcomeRoute);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
