config = {
  entry: __dirname + "/Src/app.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/Build"
  },
  devtool: 'source-map'
}

module.exports = config;