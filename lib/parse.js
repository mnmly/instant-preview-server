/**
 * Module dependencies
 */

var raw = require('raw-body');

/**
 * Expose `parse`
 */

module.exports = parse;

var delimeter = '----------';

function parse(req, next) {
  raw(req, {}, function(err, str){
    if (err) return next(err);
    try {
      var body = str.toString();
      var fragment = body.split(delimeter);
      var filename = fragment[0];
      var content = body.replace(filename + delimeter, '');
      next(null, {
        filename: filename,
        content: content
      });
    } catch (e) {
      next(e);
    }
  });
}
