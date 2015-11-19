(function() {
  var HEADER_REGEX, STATUS_CODE_REGEX;

  STATUS_CODE_REGEX = /<meta[^<>]*(?:name=['"]prerender-status-code['"][^<>]*content=['"]([0-9]{3})['"]|content=['"]([0-9]{3})['"][^<>]*name=['"]prerender-status-code['"])[^<>]*>/i;

  HEADER_REGEX = /<meta[^<>]*(?:name=['"]prerender-header['"][^<>]*content=['"]([^'"]*?): ?([^'"]*?)['"]|content=['"]([^'"]*?): ?([^'"]*?)['"][^<>]*name=['"]prerender-header['"])[^<>]*>/gi;

  exports.parseStatusCode = function(html) {
    var matches;
    matches = html.match(STATUS_CODE_REGEX);
    if (matches) {
      try {
        return parseInt(matches[0]);
      } catch (_error) {}
    }
    return null;
  };

  exports.parseHeader = function(html) {
    var matches;
    matches = html.match(HEADER_REGEX);
    if (matches) {
      return matches[0];
    }
  };

}).call(this);
