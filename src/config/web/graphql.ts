import type { NonEmptyArray } from "type-graphql";

import path from "node:path";
import mercurius from "mercurius";
import { buildSchemaSync } from "type-graphql";
import altair from "altair-fastify-plugin";

import { properties } from "@/config/properties";
import { app } from "./server";

const resolvers: NonEmptyArray<string> = [
  path.join(__dirname, "../../modules/**/views/*.resolver.{ts,js}"),
];

app.register(mercurius, {
  ide: false,
  graphiql: false,
  path: properties.graphQL.path,
  schema: buildSchemaSync({ resolvers }),
});

if (properties.graphQL.playgroundEnabled) {
  app.register(altair, {
    path: "/altair",
    baseURL: "/altair/",
    endpointURL: properties.graphQL.path,
  });
}
