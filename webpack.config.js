const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, './static'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
            presets: ["@babel/preset-react"]
        }
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  optimization: {
    minimize: false
  },
  
  devtool: 'inline-source-map'
};