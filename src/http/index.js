import Router from 'koa-router'

const router = new Router

import upload from './upload'


router.get('/post', upload)
router.post('/post', upload)

export default router