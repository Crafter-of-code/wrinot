import { configDotenv } from "dotenv";
import cors from "cors";
configDotenv();
import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import Auth from "./routes/auth.route.js";
const port = process.env.PORT;
const app = express();
app.use(urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello from server");
});
app.use(Auth);
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
