import type { NonEmptyArray } from "type-graphql";

import path from "node:path";
import mercurius from "mercurius";
import { buildSchemaSync } from "type-graphql";
import altair from "altair-fastify-plugin";

import { app } from "./server";

const resolvers: NonEmptyArray<string> = [
  path.join(__dirname, "../../modules/**/views/*.resolver.{ts,js}"),
];

app.register(mercurius, {
  ide: false,
  graphiql: false,
  path: process.env.GRAPHQL_PATH,
  schema: buildSchemaSync({ resolvers }),
});

if (process.env.GRAPHQL_PLAYGROUND_ENABLED === "true") {
  app.register(altair, {
    path: "/altair",
    baseURL: "/altair/",
    endpointURL: process.env.GRAPHQL_PATH,
  });
}
