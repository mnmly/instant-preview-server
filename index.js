/**
 * Module dependencies
 */

var koa = require('koa');
var app = module.exports = koa();
var port = 8090;
var debug = require('debug')('vim-preview-app');
var route = require('koa-route');
var parse = require('./lib/parser');

app.use(route.put('/', function *(){

  var preview = yield parse(this);

  debug('filename', preview.filename);

  app.emit('preview', preview);
  this.body = { status: 'success' };

}));

app.listen(port);

console.log('Vim Preview App is Listening to %s', port);
