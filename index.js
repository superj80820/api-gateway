const express = require('express')
const proxy = require('express-http-proxy')
const app = express()

app.use('/messfar-line-service', proxy('http://messfar-line-service:3002'))

app.listen(3003, function () {
  console.log('Listening on port 3003')
})