var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var port = process.env.PORT || 8080
var app = express()

app.use(serveStatic(path.join(__dirname, '/')))
app.listen(port)