var es3 = require('es3-safe-recast');

var createES3Preprocessor = function(logger) {
  var log = logger.create('preprocessor.es3');


  return function(content, file, done) {
    var result = null;

    try {
      result = es3.compile(content);
    } catch(e) {
      log.error('%s\n  at %s:%d', e.message, file.originalPath, e.location.first_line);
      done(e, null);
    }

    done(result);
  };
};

createES3Preprocessor.$inject = ['logger'];

module.exports = createES3Preprocessor;
