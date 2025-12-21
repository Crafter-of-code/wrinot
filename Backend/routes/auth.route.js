import { Router } from "express";
import signInController from "../Controller/signIn.Controller.js";
import logInController from "../Controller/logIn.controller.js";
const Auth = Router();
Auth.post("/signin", signInController);
Auth.post("/login", logInController);
export default Auth;
