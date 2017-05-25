module.exports = {
  entry: './main.js',
  output: {
    path: '/',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 9070
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
