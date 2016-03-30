var stacker = require('koa-compose')
var co = require('co')

module.exports = (stack, ctx) => {
  return co(stacker(Array.isArray(stack)? stack : [stack]).bind(ctx))
}
