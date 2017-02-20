let express = require('express')
let mongoose = require('mongoose')
let app = express()
let env = process.env.NODE_ENV || 'development'
let config = require('./server/congig/config')[env]
require('./server/congig/database')(config)
require('./server/congig/express')(config, app)
require('./server/congig/routes')(app)


app.listen(config.port)
console.log('Express ready')
