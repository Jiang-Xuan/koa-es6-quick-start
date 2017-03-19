import fs from 'fs'
import Koa from 'koa'
import Router from 'koa-router'
import body from 'koa-better-body'

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

app.use(body())

app.use(router.routes())
app.use(apiRouter.routes())

app.listen(3300, () => {
  console.log('open 127.0.0.1:3300')
})