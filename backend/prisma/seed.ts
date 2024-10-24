import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
	if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD) {
		console.error(
			"ADMIN_USERNAME and ADMIN_PASSWORD must be defined in the .env file"
		);
		return;
	}

	const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

	const existingAdmin = await prisma.user.findUnique({
		where: {
			username: process.env.ADMIN_USERNAME,
		},
	});

	if (!existingAdmin) {
		const admin = await prisma.user.create({
			data: {
				username: process.env.ADMIN_USERNAME,
				password: hashedPassword,
				role: "admin",
			},
		});

		console.log("Admin user created:", admin);
	} else {
		console.log("Admin user already exists.");
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
