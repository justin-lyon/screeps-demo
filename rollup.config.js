import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/main.js',
    format: 'cjs',
    sourcemap: false
  },
  plugins: [
    resolve(), // tells Rollup how to find node_modules
    commonjs() // converts cjs node_modules to ES modules
  ]
}
