const Koa = require('koa')
const app = new Koa()

app.use(function *(next){
  let start = Date.now()
  yield next

  const ms = Date.now - start
  this.set('X-Response-Time',ms + 'ms')

})
app.use(function *(next){
  let start = Date.now()
  yield next
  const ms = Date.now() - start
  console.log('%s %s - %s',this.method,this.url,ms)
})


// app.use(ctx => {
//   ctx.body = "Hello Koa2!"
// })
app.use(function *(){
  this.body = "Hello World!"
})

app.listen(2333)
console.log(`server listening on port 2333`)