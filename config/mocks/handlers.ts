import { rest } from "msw";

export const handlers = [
  rest.post("/test", (req, res, ctx) => res(ctx.status(200))),
];
