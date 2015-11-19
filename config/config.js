module.exports = [
  {
    development: {
      workers: 4,
      base_port: 8100,
      cache_ttl: 3600,
      global_timeout: 40000,
      memcached: {
        servers: ["localhost:11211"],
        options: {
          retries: 0,
          timeout: 500
        }
      },
      worker: {
        port: 8183,
        timeout: 10000,
        parse_delay: 5000,
        user_agent: "PhearBot/0.4.1 - http://phear.io",
        max_connections: 10,
        log_messages: true
      },
      hooks: {
        after_successful_request: function(inst, request, response, statusCode, body) {
          console.log('[hook:after_successful_request]', inst, statusCode)
        },
        after_failed_request: function(inst, request, response, statusCode, message) {
          console.log('[hook:after_failed_request]', inst, statusCode, message)
        }
      }
    },
    production: {
      workers: 6,
      base_port: 9100,
      cache_ttl: 604800,
      global_timeout: 40000,
      status_page: {
        enabled: false,
        name: "user",
        pass: "pick_a_password"
      },
      memcached: {
        servers: ["localhost:11211"],
        options: {
          retries: 0,
          timeout: 500
        }
      },
      worker: {
        port: 8183,
        timeout: 10000,
        parse_delay: 5000,
        user_agent: "PhearBot/0.4.1 - http://phear.io",
        max_connections: 10,
        allowed_clients: ["127.0.0.1"],
        log_messages: false
      }
    }
  }
]