var raw = require('raw-body');

var delimeter = '----------';

module.exports = parse;

function parse(req, opts) {
  req = req.req || req;
  return function(done) {
    raw(req, opts, function(err, str){
      if (err) return done(err);
      try {

        var body = str.toString();
        var fragment = body.split(delimeter);
        var filename = fragment[0];
        var content = body.replace(filename + delimeter, '');
        done(null, {
          filename: filename,
          content: content
        });

      } catch (e) {
        err.status = 400;
        err.body = str;
        done(err);
      }
    });
  };
}
