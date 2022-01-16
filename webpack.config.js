module.exports = {
  module: {
    rules: [
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              indentedSyntax: true
            }
          }
        ]
      }
    ],
    loaders: {
      loaders: [
        {
          test: /\.css$/,
          loader: 'vue-style-loader!css-loader'
        }
      ]
    }
  },
  vue: {
    loaders: {
      css: 'vue-style-loader!css-loader'
    }
  }
}
