import asyncHandler from "express-async-handler";

//PRIVATE   /api/v1/manager/datasets     GET     get datasets
const getDatasets = asyncHandler(async (req, res) => {});

//PRIVATE   /api/v1/manager/datasets/:id     GET     get dataset by id
const getDatasetById = asyncHandler(async (req, res) => {});

export { getDatasetById, getDatasets };
