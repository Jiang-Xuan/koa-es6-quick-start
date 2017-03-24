import fs from 'fs'
import Koa from 'koa'
import Router from 'koa-router'
import body from 'koa-better-body'
import logger from 'koa-logger'
import convert from 'koa-convert'
import loggers from './libs/loggers'
import { PORT } from './config'

const app = new Koa
const router = new Router

router.get('/', (ctx, next) => {
  ctx.body = 'home page'
  return next()
})

import apiRouter from './src/apiRouter'

app.use((ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Method', 'GET, POST, OPTION')

  return next()
})

app.use(logger())


app.use(convert(body()))

app.use(router.routes())
app.use(apiRouter.routes())

app.listen(PORT, () => {
  loggers.debug(`Listening in ${PORT} port.`)
})