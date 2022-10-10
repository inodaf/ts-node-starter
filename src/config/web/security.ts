import helmet from "@fastify/helmet";
import cors from "@fastify/cors";
import { properties } from "@/config/properties";
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
  origin: properties.cors.origin,
  methods: properties.cors.methods,
  credentials: properties.cors.credentials,
  allowedHeaders: properties.cors.allowedHeaders,
});
