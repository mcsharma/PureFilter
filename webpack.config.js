const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  return {
    entry: "./src/app/index.tsx",
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "bundle.js",
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, "./dist"),
      },
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: ["/node_modules/"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        // Define variables to use in the HTML
        reactUrl: isProduction
          ? 'https://unpkg.com/react@18/umd/react.production.min.js'
          : 'https://unpkg.com/react@18/umd/react.development.js',
        reactDomUrl: isProduction
          ? 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js'
          : 'https://unpkg.com/react-dom@18/umd/react-dom.development.js',
      }),
    ],
    // Ensure Webpack doesn't bundle these since we're using CDNs
    externals: {
      "styled-components": {
        commonjs: "styled-components",
        commonjs2: "styled-components",
        amd: "styled-components",
      },
      react: "React",
      "react-dom": "ReactDOM",
    },
  };
}
