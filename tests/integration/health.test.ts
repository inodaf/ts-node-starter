import test from "ava";
import { app } from "@/configurations/web/server";

// Add Health Check route.
import "@/configurations/web/health-check";

test('GET at "/health", returns "ok" and "env"', async (t) => {
  const response = await app.inject().get("/health");
  t.deepEqual(JSON.parse(response.body), { ok: true, env: "dev" });
});
