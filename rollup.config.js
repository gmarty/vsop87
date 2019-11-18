import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
import wasm from '@rollup/plugin-wasm';

module.exports = [
  {
    input: 'src/js/vsop87a/index.js',
    plugins: [sizeSnapshot(), terser()],
    output: [
      {
        file: 'dist/vsop87a.umd.js',
        format: 'umd',
        name: 'vsop87a',
      },
      {
        file: 'dist/vsop87a.esm.js',
        format: 'esm',
      },
    ],
  },
  {
    input: 'src/js/vsop87c/index.js',
    plugins: [sizeSnapshot(), terser()],
    output: [
      {
        file: 'dist/vsop87c.umd.js',
        format: 'umd',
        name: 'vsop87c',
      },
      {
        file: 'dist/vsop87c.esm.js',
        format: 'esm',
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
