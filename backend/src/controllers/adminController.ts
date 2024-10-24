import asyncHandler from "express-async-handler";

// PRIVATE  /api/v1/admin/users   POST  create users (manager, user)
const createUser = asyncHandler(async (req, res) => {});

// PRIVATE  /api/v1/admin/users   GET  fetch all users
const getUsers = asyncHandler(async (req, res) => {});

// PRIVATE  /api/v1/admin/users/:id   GET  fetch user by id
const getUserById = asyncHandler(async (req, res) => {});

// PRIVATE  /api/v1/admin/users/:id   PUT  update user by id
const updateUser = asyncHandler(async (req, res) => {});

// PRIVATE  /api/v1/admin/users/:id   DELETE  delete user by id
const deleteUser = asyncHandler(async (req, res) => {});

// PRIVATE  /api/v1/admin/users/datasets   POST     upload dataset
const uploadDataset = asyncHandler(async (req, res) => {});

// PRIVATE  /api/v1/admin/users/datasets   GET     fetch dataset
const getDatasets = asyncHandler(async (req, res) => {});

// PRIVATE  /api/v1/admin/users/datasets/:id   GET     fetch dataset by id
const getDatasetById = asyncHandler(async (req, res) => {});

// PRIVATE  /api/v1/admin/users/datasets/:id   DELETE     delete dataset by id
const deleteDataset = asyncHandler(async (req, res) => {});

export {
	createUser,
	getUserById,
	getUsers,
	updateUser,
	deleteUser,
	uploadDataset,
	getDatasetById,
	getDatasets,
	deleteDataset,
};
