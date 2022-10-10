import "reflect-metadata";
import "@/config/envs";
import "@/config/web/security";
import "@/config/web/graphql";
import "@/config/web/health-check";
import { properties } from "@/config/properties";
import { start } from "@/config/web/server";

console.log("🎉 Hello Starter!", {
  envs: {
    node: process.env.NODE_ENV,
    app: process.env.APP_ENV,
  },
  properties,
});

start();
