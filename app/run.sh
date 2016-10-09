#!/bin/sh
asm2wasm $1.asm.js -o $1.wasm.10 && wasm-as $1.wasm.10 -o $1.wasm.10.s && /usr/local/bin/node --expose-wasm index.js $1.wasm.10.s