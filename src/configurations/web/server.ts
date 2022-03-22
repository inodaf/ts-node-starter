import Fastify from "fastify";
import { prisma } from "@/configurations/orm/prisma";

export const app = Fastify({ logger: true });

export const start = async () => {
  try {
    // await prisma.$connect();
    await app.listen(3000);
  } catch (error: unknown) {
    app.log.error(error);
    throw new Error("Failed to start Fastify Server");
  }
};
