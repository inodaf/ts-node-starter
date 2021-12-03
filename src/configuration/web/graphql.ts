import mercurius from 'mercurius';
import altair from 'altair-fastify-plugin';
import {buildSchemaSync} from 'type-graphql';
import {app} from './server';
import {resolvers} from '@/modules/resolvers';

const schema = buildSchemaSync({
  resolvers,
});

void app.register(mercurius, {
  graphiql: false,
  ide: false,
  path: process.env.GRAPHQL_PATH,
  schema,
});

if (process.env.GRAPHQL_PLAYGROUND_ENABLED === 'true') {
  void app.register(altair, {
    path: '/altair',
    baseURL: '/altair/',
    endpointURL: process.env.GRAPHQL_PATH,
  });
}
