/* eslint-disable @typescript-eslint/naming-convention */

import {resolve} from 'node:path';
import {config} from 'dotenv-flow';

config({
  node_env: process.env.APP_ENV,
  path: resolve(process.cwd(), './config/envs'),
});
