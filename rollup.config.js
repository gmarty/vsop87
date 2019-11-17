import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';

module.exports = [
  {
    input: 'src/a/index.js',
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
    input: 'src/c/index.js',
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
];
