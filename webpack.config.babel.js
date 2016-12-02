import {
  HotModuleReplacementPlugin,
  NoErrorsPlugin
} from 'webpack';
import path from 'path';

const BUILD_DIR = path.resolve (__dirname, 'dist');
const APP_DIR = path.resolve (__dirname, 'src');

export default {
  entry: [
    'webpack/hot/dev-server',
    path.resolve (APP_DIR, 'index.html'),
    path.resolve (APP_DIR, 'index.jsx')
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    root: APP_DIR,
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HotModuleReplacementPlugin (),
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loader : 'babel'
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.(css|less)$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url-loader?limit=300000&name=[name]-[hash].[ext]&root=.'
      }
    ]
  }
};
