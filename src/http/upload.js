import fs from 'fs'
import path from 'path'

async function http(ctx, next) {
  ctx.body = {
    TEST: '这是一个测试的JSON数据返回接口',
    array: [
      'one',
      'two',
      'three'
    ],
    object: {
      one: 'one',
      two: 'two',
      three: 'three'
    }
  }

  return next()
}

export default http