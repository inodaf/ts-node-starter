import '@/infra/vendors/dotenv';
import '@/infra/server/graphql';
import '@/infra/server/health-check';
import {start} from '@/infra/server';

console.log('Hello Starter!', {
  envs: {
    node: process.env.NODE_ENV,
    app: process.env.APP_ENV,
    graphiql: process.env.GRAPHIQL_ENABLED,
  },
});

void start();
