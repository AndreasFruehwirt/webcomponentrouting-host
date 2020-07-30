const merge = require('webpack-merge');
const webpack = require('webpack');

exports.default = {
  pre: function(builderConfig) {
  },


  config: function (cfg) {
    const strategy = merge.strategy({
      'devtool': 'replace',
    });

    return strategy(cfg, {
      devtool: 'inline-source-map',
      plugins: [
        new webpack.DefinePlugin({
          "VERSION": JSON.stringify("4711")
        })
      ]
    });
  },

  post: function(builderConfig) {
  }

}
