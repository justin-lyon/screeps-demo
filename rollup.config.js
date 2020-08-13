import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import screeps from 'rollup-plugin-screeps'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/main.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    resolve(), // tells Rollup how to find node_modules
    commonjs(), // converts cjs node_modules to ES modules
    screeps({ configFile: './screeps.json' })
  ]
}
