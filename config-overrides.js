const { injectBabelPlugin } = require('react-app-rewired')
const rewireCssModules = require('react-app-rewire-css-modules')
const rewireEslint = require('react-app-rewire-eslint')

const path = require('path')

function overrideEslintOptions(options) {
  options.rules = {
    'no-undef': 'off'
  }
  return options
}

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd-mobile', style: 'css' }],
    config
  )
  config = injectBabelPlugin(['transform-decorators-legacy'], config)
  config = rewireCssModules(config, env)
  config = rewireEslint(config, env, overrideEslintOptions)

  config.resolve = {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '~actions': path.resolve(__dirname, './src/actions'),
      '~reducers': path.resolve(__dirname, './src/reducers'),
      '~components': path.resolve(__dirname, './src/components'),
      '~routes': path.resolve(__dirname, './src/routes'),
      '~layouts': path.resolve(__dirname, './src/layouts'),
      '~style': path.resolve(__dirname, './src/style'),
      '~services': path.resolve(__dirname, './src/services'),
      '@connect': path.resolve(__dirname, './src/framework/connect'),
      '@reduxForm': path.resolve(__dirname, './src/framework/reduxForm'),
      '@history': path.resolve(__dirname, './src/framework/history'),
      '@request': path.resolve(__dirname, './src/framework/request')
    }
  }

  return config
}
