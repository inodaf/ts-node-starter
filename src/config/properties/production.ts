import type { GraphQL, CORS, Properties } from "@/types/properties.schema";

const graphQL: Partial<GraphQL> = {
  playgroundEnabled: false,
};

const cors: Partial<CORS> = {
  origin: "your_domain",
  credentials: true,
};

export const properties: Partial<Properties> = { graphQL, cors };
