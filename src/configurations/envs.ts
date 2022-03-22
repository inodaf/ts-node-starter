import { resolve } from "node:path";
import { config } from "dotenv-flow";
import joi from "joi";

const schema = joi.object({
  APP_ENV: joi.string().required(),
  NODE_ENV: joi.string().required(),
  DATABASE_URL: joi.string().required(),
  GRAPHQL_PATH: joi.string().required(),
  GRAPHQL_PLAYGROUND_ENABLED: joi.boolean().required(),
  CORS_ORIGIN: joi.string().required(),
  CORS_CREDENTIALS: joi.boolean().required(),
  CORS_METHODS: joi.string().required(),
  CORS_ALLOWED_HEADERS: joi.string().required(),
});

const { parsed } = config({
  node_env: process.env.APP_ENV,
  path: resolve(process.cwd(), "./config/envs"),
});

const { error } = schema.validate(
  Object.assign(parsed, { APP_ENV: process.env.APP_ENV })
);

if (error) {
  const requiredEnvs = error.details.filter(
    ({ type }) => type === "any.required"
  );
  const unknownEnvs = error.details.filter(
    ({ type }) => type === "object.unknown"
  );

  const missingEnvs = [
    ...unknownEnvs.map(({ context }) => context?.key),
    ...requiredEnvs.map(({ context }) => context?.key),
  ];

  if (unknownEnvs.length > 0) {
    console.log(
      "You probably forgot to map a new Env into `envs.ts`:",
      missingEnvs
    );
  }

  if (requiredEnvs.length > 0) {
    console.log("You probably forgot to define a required Env:", missingEnvs);
  }

  throw new TypeError(error.message);
}
