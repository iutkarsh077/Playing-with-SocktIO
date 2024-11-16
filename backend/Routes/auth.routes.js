import express from "express";
import { Login, Logout, Signup } from "../controllers/auth.controllers.js";

const router = express.Router();
router.post("/login", Login);
router.post("/signup", Signup);
router.post("/logout", Logout);
export default router;
