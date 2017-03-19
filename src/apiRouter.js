import Router from 'koa-router'

const router = new Router

import http from './http'

router.use('/http', http.routes())

export default router