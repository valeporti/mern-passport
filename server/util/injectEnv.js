export function injectEnv() {
  let json = require('../../.env.json')
  Object.keys(json).forEach(function(key) {
    process.env[key] = json[key];
  })
}