/**
 * Module dependencies
 */

var Server = require('./index');
var port = process.env.PREVIEW_PORT || 8090;
var server = new Server();

/**
 * Listen to `port`
 */

server.listen(port);
console.log('Listening at %s', port);
