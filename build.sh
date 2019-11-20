emcc -Oz -s WASM=1 -s FILESYSTEM=0 -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]' \
    src/c/vsop87c/vsop87c-mercury.c \
    src/c/vsop87c/vsop87c-venus.c \
    src/c/vsop87c/vsop87c-earth.c \
    src/c/vsop87c/vsop87c-mars.c \
    src/c/vsop87c/vsop87c-jupiter.c \
    src/c/vsop87c/vsop87c-saturn.c \
    src/c/vsop87c/vsop87c-uranus.c \
    src/c/vsop87c/vsop87c-neptune.c \
    -o dist/wasm/vsop87c.wasm
