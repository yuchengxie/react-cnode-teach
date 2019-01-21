const express = require('express')
const ReactSSR = require('react-dom/server')
const bodyParser = require('body-parser')
const session = require('express-session')
const fs = require('fs')
const path = require('path')
const favicon = require('serve-favicon')

const isDev = process.env.NODE_ENV === 'development'
const app = express()

app.use(session({
  maxAge: 10 * 60 * 1000,
  name:'tid',
  resave:false,
  saveUninitialized:false,
  secret:'react cnode class'
}))

app.use(favicon(path.join(__dirname, '../favicon.ico')))

app.use('/api/user',require('./util/handle-login'))
app.use('/api',require('./util/proxy'))

app.use(bodyParser.json)
app.use(bodyParser.urlencoded({ extended: false }))


if (! isDev) {
  const serverEntry = require('../dist/server-entry').default
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
  app.use('/public', express.static(path.join(__dirname, '../dist')))
  console.log(serverEntry)
  app.get('*', function (req, res) {
    console.log('get method')
    const appString = ReactSSR.renderToString(serverEntry)
    console.log('server html\n:' + template.replace('<app></app>', appString))
    res.send(template.replace('<!--app-->', appString))
  })
} else {
  const devStatic = require('./util/dev-static')
  devStatic(app)
}

app.listen(3333, function () {
  console.log('server is listening on 3333')
})
