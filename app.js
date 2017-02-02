const Koa = require('koa');
const app = new Koa();

app.use(async (ctx,next)=>{
  try {
    await(next)
  } catch (e) {
      ctx.body = {message : e.message}
      ctx.status = e.status || 500
  }
})

app.use(async ctx => {
  const yo = "YO!"
  ctx.body = yo
})

app.listen(2333)
console.log('app listening on port 2333')
