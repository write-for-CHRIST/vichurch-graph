const webpack = require('webpack')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const entry = ['./src/index.ts']
!isProd && entry.push('webpack/hot/poll?101')

module.exports = {
  entry,
  target: 'node',
  mode: 'development',
  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json'
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
