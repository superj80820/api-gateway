const express = require('express')
const proxy = require('express-http-proxy')
const authMeddleware = require('./middleware/auth')
const app = express()

app.use('/messfar-line-service', proxy('http://messfar-line-service:3002'))

app.use('/auth-service', proxy('http://auth-service:3005'))

app.use(
  '/face-service',
  authMeddleware.verifyToken,
  proxy('http://messfar-line-service:3002')
)

app.listen(3003, function () {
  console.log('Listening on port 3003')
})