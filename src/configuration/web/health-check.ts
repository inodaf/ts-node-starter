import { app } from "./server";

app.get("/health", (_, reply) => {
  void reply.status(200).send({ ok: true, env: process.env.APP_ENV });
});
