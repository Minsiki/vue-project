const path = require('path');
const target = "http://127.0.0.1:3000";
module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          "@": path.resolve("src"),
        },
        extensions: [".js", ".vue", ".json"],
      },
    },
    devServer: {
      port: 8080,
      proxy: {
        '^/api': {
          target,
          changeOrigin: true
        }
      }
    }
  };