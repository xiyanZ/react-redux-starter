const { injectBabelPlugin } = require('react-app-rewired')
const rewireCssModules = require('react-app-rewire-css-modules')

const path = require('path')

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config = injectBabelPlugin(['transform-decorators-legacy'], config)
  config = rewireCssModules(config, env)

  config.resolve = {
    alias: {
      '～': path.resolve(__dirname, './src'),
      '～action': path.resolve(__dirname, './src/actions'),
      '～reducers': path.resolve(__dirname, './src/reducers'),
      '～components': path.resolve(__dirname, './src/components'),
      '～routes': path.resolve(__dirname, './src/routes'),
      '@connect': path.resolve(__dirname, './src/framework/connect'),
      '@createForm': path.resolve(__dirname, './src/framework/createForm'),
      '@history': path.resolve(__dirname, './src/framework/history')
    }
  }

  return config
}
