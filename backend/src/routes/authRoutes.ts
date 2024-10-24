import express from "express";
const router = express.Router();
import { loginUser, logoutUser } from "../controllers/authController";

router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
