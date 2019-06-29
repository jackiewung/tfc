module.exports = {
  devtool: 'eval-source-map',
  entry: [__dirname + '/src/index.js'],
  output: {
    path: __dirname + '/public/bundle',
    filename: 'bundle.js',
    publicPath: '/bundle/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|svg|otf|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },
};
