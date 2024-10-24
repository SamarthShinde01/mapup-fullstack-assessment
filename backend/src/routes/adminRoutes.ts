import express from "express";
import {
	createUser,
	deleteDataset,
	deleteUser,
	getDatasetById,
	getDatasets,
	getUserById,
	getUsers,
	updateUser,
	uploadDataset,
} from "../controllers/adminController";
const router = express.Router();

//User management
router.post("/users", createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

//Dataset management
router.post("/datasets", uploadDataset);
router.get("/datasets", getDatasets);
router.get("/datasets/:id", getDatasetById);
router.delete("/datasets/:id", deleteDataset);

export default router;
