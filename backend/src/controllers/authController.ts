import asyncHandler from "express-async-handler";

//PUBLIC    /api/v1/auth/login   POST
const loginUser = asyncHandler(async (req, res) => {});

//PUBLIC    /api/v1/auth/logout   POST
const logoutUser = asyncHandler(async (req, res) => {});

export { loginUser, logoutUser };
