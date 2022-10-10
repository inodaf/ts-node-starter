import Fastify from "fastify";
import { properties } from "@/configurations/properties";
import { prisma } from "@/configurations/orm/prisma";

export const app = Fastify({ logger: true });

export const start = async () => {
  try {
    if (process.env.DATABASE_URL) await prisma.$connect();

    await app.listen({
      port: properties.server.port,
      host: properties.server.host,
    });
  } catch (error: unknown) {
    app.log.error(error);
    throw new Error("Failed to start Fastify Server");
  }
};
