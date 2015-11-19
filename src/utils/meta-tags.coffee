STATUS_CODE_REGEX = /<meta[^<>]*(?:name=['"]prerender-status-code['"][^<>]*content=['"]([0-9]{3})['"]|content=['"]([0-9]{3})['"][^<>]*name=['"]prerender-status-code['"])[^<>]*>/i
HEADER_REGEX = /<meta[^<>]*(?:name=['"]prerender-header['"][^<>]*content=['"]([^'"]*?): ?([^'"]*?)['"]|content=['"]([^'"]*?): ?([^'"]*?)['"][^<>]*name=['"]prerender-header['"])[^<>]*>/gi

exports.parseStatusCode = (html) ->
  matches = html.match(STATUS_CODE_REGEX)
  if matches and matches.length > 1
    return parseInt(matches[1]) || null
  else
    null

exports.parseHeader = (html) ->
  matches = html.match(HEADER_REGEX)
  return matches[0] if matches
