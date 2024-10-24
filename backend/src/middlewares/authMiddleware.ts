import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

interface CustomRequest extends Request {
	user?: string | JwtPayload;
}

const authMiddleware = asyncHandler(
	async (req: CustomRequest, res: Response, next: NextFunction) => {
		let token: string | undefined;

		const authHeader = req.headers.authorization || req.headers.Authorization;

		if (
			authHeader &&
			typeof authHeader === "string" &&
			authHeader.startsWith("Bearer")
		) {
			token = authHeader.split(" ")[1];
		} else if (req.cookies.jwt) {
			token = req.cookies.jwt;
		}

		if (token) {
			try {
				const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
				req.user = decoded;
				next();
			} catch (error: any) {
				res.status(401);
				throw new Error(error?.message);
			}
		} else {
			res.status(401);
			throw new Error("Not authorized, no token found");
		}
	}
);

export default authMiddleware;
