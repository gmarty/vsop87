import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
import wasm from '@rollup/plugin-wasm';

module.exports = [
  {
    input: 'src/js/vsop87a/index.js',
    plugins: [sizeSnapshot(), terser()],
    output: [
      {
        file: 'dist/vsop87a.js',
        format: 'umd',
        name: 'vsop87a',
      },
    ],
  },
  {
    input: 'src/js/vsop87c/index.js',
    plugins: [sizeSnapshot(), terser()],
    output: [
      {
        file: 'dist/vsop87c.js',
        format: 'umd',
        name: 'vsop87c',
      },
    ],
  },
  {
    input: 'src/js/wasm/vsop87c.js',
    plugins: [sizeSnapshot(), terser(), wasm()],
    output: [
      {
        file: 'dist/vsop87c-wasm.js',
        format: 'umd',
        name: 'vsop87cLoader',
      },
    ],
  },
];
