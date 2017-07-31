var UglifyJsPlugin = require ("uglifyjs-webpack-plugin");
var webpackConfig = require ("./webpack.config");

module.exports = Object.assign ({}, webpackConfig, {
  plugins: webpackConfig.plugins.concat ([
    new UglifyJsPlugin ({ sourceMap: true })
  ])
});
