import '@/infra/vendors/dotenv';

console.log('Hello Starter!', {
  envs: {
    node: process.env.NODE_ENV,
    app: process.env.APP_ENV,
    db: process.env.DB_CONNECTION_STRING,
  },
});
