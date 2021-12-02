import mercurius from 'mercurius';
import {app} from '.';

void app.register(mercurius, {
  graphiql: process.env.GRAPHIQL_ENABLED === 'true',
  path: process.env.GRAPHQL_PATH,
  schema: `
    type Query {
      hello(name: String!): String
    }
  `,
  resolvers: {
    Query: {
      hello: (_, {name}: {name: string}) => `Howdy, ${name}!`,
    },
  },
});
