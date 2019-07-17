const path = require("path");

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function(config, env) {
    // ...add your webpack config
    config.resolve = {
      ...config.resolve,
      alias: { "@": path.resolve(__dirname, "src") }
    };
    return config;
  }
};
