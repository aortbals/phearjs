#
# config
# -------------
#
# Parses a config file.
#

fs = require("fs")

class Config
  constructor: (path, environment) ->
    if path.match(/.json$/)
      @config = JSON.parse(fs.readFileSync(path))[0][environment]
    else if path.match(/.js$/)
      @config = require(path)[0][environment]
    else
      throw new Error("Could not open '#{path}'. Please provide a valid JSON or javascript file.")

module.exports = Config
