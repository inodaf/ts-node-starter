import joi from "joi";
import { config } from "dotenv";

const schema: { [x: string]: joi.StringSchema } = {
  NODE_ENV: joi.string().required(),
  APP_ENV: joi.string().required(),
  DATABASE_URL: joi.string().required(),
};

const loadedFromDotEnv = config().parsed;
const { error } = joi
  .object(schema)
  .validate({ ...loadedFromDotEnv, ...loadedFromProcess() });

if (error) {
  const [unknowns, missings] = check(error.details);
  const reason = new TypeError("You probably forgot to ");

  if (missings.length) reason.message += "define a required env:" + missings;
  if (unknowns.length) reason.message += "map new env to `envs.ts`:" + unknowns;

  throw reason;
}

function loadedFromProcess() {
  return Object.keys(process.env)
    .filter((key) => key in schema)
    .reduce((acc, key) => ({ ...acc, [key]: process.env[key] }), {});
}

function check(details: joi.ValidationError["details"]) {
  const missings = details.filter((d) => d.type === "any.required");
  const unknowns = details.filter((d) => d.type === "object.unknown");

  return [
    unknowns.map((i) => i.context?.key),
    missings.map((i) => i.context?.key),
  ];
}
