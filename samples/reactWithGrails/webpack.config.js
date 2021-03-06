var path = require('path');

module.exports = {
  entry: {
    books: './src/main/webapp/app/books.js'
  },
  output: {
    path: './grails-app/assets/javascripts',
    publicPath: '/assets/',
    filename: 'bundle-[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src/main/webapp'),
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=10000&prefix=assets/!img'
      }
    ]
  }
};

