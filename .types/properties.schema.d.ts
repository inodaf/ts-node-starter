export type Server = {
  port: number;
  host: string;
};

export type GraphQL = {
  path: string;
  playgroundEnabled: boolean;
};

export type CORS = {
  origin: string;
  credentials: boolean;
  methods: string[];
  allowedHeaders: string[];
};

export type Properties = {
  server: Partial<Server>;
  graphQL: Partial<GraphQL>;
  cors: Partial<CORS>;
};
