import wasm from '../../../dist/wasm/vsop87c.wasm';
import { getT } from '../utils/index';

const WASM_PAGE_SIZE = 65536;
const INITIAL_TOTAL_MEMORY = 16777216;
const wasmMemory = new WebAssembly.Memory({
  initial: INITIAL_TOTAL_MEMORY / WASM_PAGE_SIZE,
  maximum: INITIAL_TOTAL_MEMORY / WASM_PAGE_SIZE,
});
const wasmTable = new WebAssembly.Table({
  initial: 1,
  maximum: 1 + 0,
  element: 'anyfunc',
});

const asmLibraryArg = { memory: wasmMemory, table: wasmTable };
const imports = {
  env: asmLibraryArg,
  wasi_unstable: asmLibraryArg,
};

export default wasm(imports).then(({ instance }) => {
  return (jdtt = 2451545) => {
    const t = getT(jdtt);
    return {
      mercury: {
        x: instance.exports.mercury_x(t),
        y: instance.exports.mercury_y(t),
        z: instance.exports.mercury_z(t),
      },
      venus: {
        x: instance.exports.venus_x(t),
        y: instance.exports.venus_y(t),
        z: instance.exports.venus_z(t),
      },
      earth: {
        x: instance.exports.earth_x(t),
        y: instance.exports.earth_y(t),
        z: instance.exports.earth_z(t),
      },
      mars: {
        x: instance.exports.mars_x(t),
        y: instance.exports.mars_y(t),
        z: instance.exports.mars_z(t),
      },
      jupiter: {
        x: instance.exports.jupiter_x(t),
        y: instance.exports.jupiter_y(t),
        z: instance.exports.jupiter_z(t),
      },
      saturn: {
        x: instance.exports.saturn_x(t),
        y: instance.exports.saturn_y(t),
        z: instance.exports.saturn_z(t),
      },
      uranus: {
        x: instance.exports.uranus_x(t),
        y: instance.exports.uranus_y(t),
        z: instance.exports.uranus_z(t),
      },
      neptune: {
        x: instance.exports.neptune_x(t),
        y: instance.exports.neptune_y(t),
        z: instance.exports.neptune_z(t),
      },
    };
  };
});
