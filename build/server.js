const express = require('express');
const webpack = require('webpack');
const history = require('connect-history-api-fallback');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.dev.js');

const app = express();
const compiler = webpack(config);

app.use(history());

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.listen(3000, function () {
  console.log('dev server running on port 3000');
});
