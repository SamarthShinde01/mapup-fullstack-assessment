import express from "express";
import { getDataset } from "../controllers/userController";
const router = express.Router();

//get datasets
router.get("/datasets", getDataset);

export default router;
