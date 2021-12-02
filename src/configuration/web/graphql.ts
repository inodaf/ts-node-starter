import mercurius from 'mercurius';
import {buildSchemaSync} from 'type-graphql';
import {app} from './server';
import {resolvers} from '@/modules/resolvers';

const schema = buildSchemaSync({
  resolvers,
});

void app.register(mercurius, {
  graphiql: process.env.GRAPHIQL_ENABLED === 'true',
  path: process.env.GRAPHQL_PATH,
  schema,
});
