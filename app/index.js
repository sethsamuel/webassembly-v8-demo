const Wasm = global.Wasm || _WASMEXP_;
var fs = require('fs');
var func = process.argv[2];
var f = fs.readFileSync(`./${func}.wasm.10.s`);
var b = new Uint8Array(f).buffer;
console.log(b);
const deps = { env: {}, global : { Math: { exp : global.Math.exp } } };
console.log(deps.global.Math);
var m = Wasm.instantiateModule(b, deps.global);
console.log('wasm module', m);
console.log("START WASM");
console.time('wasm');
console.log(m.exports[func](24, 24))
console.timeEnd('wasm');
console.time('wasm');
console.log(m.exports[func](30, 30))
console.timeEnd('wasm');
console.time('wasm');
console.log(m.exports[func](36, 36))
console.timeEnd('wasm');
console.time('wasm');
console.log(m.exports[func](40, 40))
console.timeEnd('wasm');
console.time('wasm');
console.log(m.exports[func](42, 42))
console.timeEnd('wasm');

var js = require(`./${func}.asm.js`)
console.log('js module', js);
console.log("START JS");
console.time('js');
console.log(js[func](24, 24))
console.timeEnd('js');
console.time('js');
console.log(js[func](30, 30))
console.timeEnd('js');
console.time('js');
console.log(js[func](36, 36))
console.timeEnd('js');
console.time('js');
console.log(js[func](40, 40));
console.timeEnd('js');
console.time('js');
console.log(js[func](42, 42))
console.timeEnd('js');
