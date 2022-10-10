import "reflect-metadata";
import "@/configurations/envs";
import "@/configurations/web/security";
import "@/configurations/web/graphql";
import "@/configurations/web/health-check";
import { properties } from "@/configurations/properties";
import { start } from "@/configurations/web/server";

console.log("🎉 Hello Starter!", {
  envs: {
    node: process.env.NODE_ENV,
    app: process.env.APP_ENV,
  },
  properties,
});

start();
