
/**
 * Default config for Docker-based test suite.
 */

/**
 * Get Docker host.
 */

function getHost(name) {
  return process.env.CI === 'true' ? name : '127.0.0.1'; // eslint-disable-line no-process-env
}

/**
 * Services config.
 */

const config = {
  syscoind: {
    host: getHost('syscoind'),
    password: 'p',
    port: 8368,
    username: 'u'
  },
  syscoindSsl: {
    host: getHost('syscoind-ssl'),
    password: 'p',
    port: 8368,
    username: 'u'
  },
  syscoindUsernameOnly: {
    host: getHost('syscoind-username-only'),
    port: 8368,
    username: 'u'
  }
};

/**
 * Export `config`.
 */

export default config;
