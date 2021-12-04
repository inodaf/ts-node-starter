import mercurius from 'mercurius';
import altair from 'altair-fastify-plugin';
import {buildSchemaSync} from 'type-graphql';
import {app} from './server';
import {resolvers} from '@/modules/resolvers';

void app.register(mercurius, {
  ide: false,
  graphiql: false,
  path: process.env.GRAPHQL_PATH,
  schema: buildSchemaSync({resolvers}),
});

if (process.env.GRAPHQL_PLAYGROUND_ENABLED === 'true') {
  void app.register(altair, {
    path: '/altair',
    baseURL: '/altair/',
    endpointURL: process.env.GRAPHQL_PATH,
  });
}
