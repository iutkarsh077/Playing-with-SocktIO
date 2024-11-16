import express from "express";
import { getMessages, SendMessage } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, SendMessage);

export default router;
