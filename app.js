const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = "Hello Koa2!"
})

app.listen(2333)
console.log(`server listening on port 2333`)