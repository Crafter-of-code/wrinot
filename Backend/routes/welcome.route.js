import { Router } from "express";
import welcomeController from "../Controller/welcome.controller.js";
const welcomeRoute = Router();
welcomeRoute.get("/", welcomeController);

export default welcomeRoute;
