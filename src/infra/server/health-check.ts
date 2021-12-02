import {app} from '.';

app.get('/health', (_, reply) => {
  void reply.status(200).send({ok: true});
});
