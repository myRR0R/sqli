import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  dest: 'index.es5.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};