var nodeResolve = require('rollup-plugin-node-resolve')
var commonjs = require('rollup-plugin-commonjs')
var uglify = require('rollup-plugin-uglify')

var prod = process.env.NODE_ENV === 'production'

module.exports = {
  input: 'src/index.js',
  output: {
    file: prod ? 'dist/tiger-dom.min.js' : 'dist/tiger-dom.js',
    format: 'umd',
    name: '$'
  },
  plugins: [
    nodeResolve({
      main: true,
      extensions: ['.js']
    }),
    commonjs({
      includes: 'node_modules/**'
    }),
    (prod && uglify())
  ]
}