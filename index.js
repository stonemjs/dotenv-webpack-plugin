'use strict'

let plugin
try {
  plugin = require('./dist').DotenvWebpack
} catch (err) {
  if (err.code === 'MODULE_NOT_FOUND') {
    require('babel-register')
    plugin = require('./src').DotenvWebpack
  } else {
    console.log(err)
    process.exit(1)
  }
}

module.exports = plugin
