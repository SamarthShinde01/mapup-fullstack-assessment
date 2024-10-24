import jwt from "jsonwebtoken";
import { Response } from "express";

const generateToken = (userId: string, role: string, res: Response): void => {
	const token = jwt.sign({ userId, role }, process.env.JWT_SECRET as string, {
		expiresIn: "2h",
	});

	res.cookie("jwt", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV !== "development",
		sameSite: "strict",
		maxAge: 2 * 60 * 60 * 1000,
	});
};

export default generateToken;
