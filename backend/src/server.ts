import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoutes";
import adminRoute from "./routes/adminRoutes";
import managerRoute from "./routes/managerRoutes";
import userRoute from "./routes/userRoutes";
import { errorHandler, notFound } from "./middlewares/errorHandlerMiddleware";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/manager", managerRoute);
app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
	res.json("server is running..");
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
