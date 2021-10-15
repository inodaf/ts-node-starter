import { config } from 'dotenv-flow'
import { resolve } from 'path'

config({
  node_env: process.env.APP_ENV,
  path: resolve(process.cwd(), './config/envs')
})