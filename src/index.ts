import '@/configuration/envs';
import '@/configuration/web/graphql';
import '@/configuration/web/health-check';
import {start} from '@/configuration/web/server';

console.log('Hello Starter!', {
  envs: {
    node: process.env.NODE_ENV,
    app: process.env.APP_ENV,
    graphiql: process.env.GRAPHIQL_ENABLED,
  },
});

void start();
