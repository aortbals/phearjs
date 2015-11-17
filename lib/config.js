(function() {
  var Config, fs;

  fs = require("fs");

  Config = (function() {
    function Config(path, environment) {
      if (path.match(/.json$/)) {
        this.config = JSON.parse(fs.readFileSync(path))[0][environment];
      } else if (path.match(/.js$/)) {
        this.config = require(path)[0][environment];
      } else {
        throw new Error("Could not open '" + path + "'. Please provide a valid JSON or javascript file.");
      }
    }

    return Config;

  })();

  module.exports = Config;

}).call(this);
