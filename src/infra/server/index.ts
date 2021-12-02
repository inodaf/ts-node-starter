import Fastify from 'fastify';

export const app = Fastify({logger: true});

export const start = async () => {
  try {
    await app.listen(3000);
  } catch (error: unknown) {
    app.log.error(error);
    throw new Error('Failed to start Fastify Server');
  }
};
