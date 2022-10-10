import test from "ava";
import { server } from ".";

test.before(() => server.listen());
test.afterEach(() => server.resetHandlers());
test.after(() => server.close());
