var webpack = require('webpack'),
    path = require('path')

module.exports = {
  context: path.join(__dirname),
  entry: ["./main.js"],
  output: {
    path: "./public/static",
    publicPath: "/public/static/",
    filename: "build.js"
  },
  resolve: {
    alias: {
        vue: 'vue/dist/vue.js'
    }
  },
  module: {
      loaders: [
        {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        },
        {
            test: /\.vue$/,
            loader: 'vue'
        },
      ]
  }
}


