import helmet from "@fastify/helmet";
import cors from "@fastify/cors";
import { app } from "./server";

app.register(helmet, {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      objectSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:"],
    },
  },
});

app.register(cors, {
  origin: process.env.CORS_ORIGIN,
  credentials: process.env.CORS_CREDENTIALS === "true",
  allowedHeaders: process.env.CORS_ALLOWED_HEADERS?.split(","),
  methods: process.env.CORS_METHODS?.split(","),
});
