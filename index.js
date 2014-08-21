/**
 * Module dependencies
 */

var http = require('http');
var parse = require('./lib/parse');
var Emitter = require('events').EventEmitter;
var inherits = require('util').inherits;

module.exports = Server;

function Server() {

  this._server = http.createServer(this.callback.bind(this));

}

inherits(Server, Emitter);

Server.prototype.listen = function(port) {
  port = port || process.env.PREVIEW_PORT || 8090;
  this._server.listen(port);
  console.log('Preview server is listening at %s', port);
};

Server.prototype.callback = function(req, res){

  if ('PUT' !== req.method) return res.end();

  var self = this;

  parse(req, function(err, result) {
    if (err) {
      throw new Error(err);
    } else {
      self.emit('preview', result);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'success' }));
    }
  });
};
