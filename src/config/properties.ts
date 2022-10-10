import merge from "lodash.merge";
import { Properties } from "@/types/properties.schema";

function load(file: string): { properties: Properties } {
  return require(`./properties/${file}`);
}

const base = load("base").properties;
const environment = load(process.env.APP_ENV as string).properties;

export const properties: Properties = merge(base, environment);
