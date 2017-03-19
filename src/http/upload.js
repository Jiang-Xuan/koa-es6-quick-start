import fs from 'fs'
import path from 'path'

async function http(ctx, next) {
  console.log(ctx.request.fields)
  ctx.body = {
    hello: "fffff"
  }

  return next()
}

export default http