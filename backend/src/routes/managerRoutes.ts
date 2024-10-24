import express from "express";
import { getDatasetById, getDatasets } from "../controllers/managerController";
const router = express.Router();

//limited user data only
router.get("/users");

//dataset management
router.get("/datasets", getDatasets);
router.get("/datasets/:id", getDatasetById);

export default router;
