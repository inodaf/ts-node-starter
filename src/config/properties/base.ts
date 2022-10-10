import type { CORS, GraphQL, Properties, Server } from "@/types/properties.schema";

const server: Server = {
  port: 3000,
  host: '0.0.0.0',
};

const graphQL: GraphQL = {
  path: "/graphql",
  playgroundEnabled: true,
};

const cors: CORS = {
  origin: "*",
  credentials: false,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

export const properties: Properties = { server, graphQL, cors };
