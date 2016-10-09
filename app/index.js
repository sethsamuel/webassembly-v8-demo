const Wasm = global.Wasm || _WASMEXP_;
var fs = require('fs');
var f = fs.readFileSync(`./${process.argv[2]}`);
var b = new Uint8Array(f).buffer;
console.log(b);
const deps = { env: {}, global : { Math: { exp : global.Math.exp } } };
console.log(deps.global.Math);
var m = Wasm.instantiateModule(b);
console.log(m);
console.log("START WASM");
console.time('wasm');
console.log(m.exports.fib(24))
console.timeEnd('wasm');
console.time('wasm');
console.log(m.exports.fib(30))
console.timeEnd('wasm');
console.time('wasm');
console.log(m.exports.fib(36))
console.timeEnd('wasm');
console.time('wasm');
console.log(m.exports.fib(40))
console.timeEnd('wasm');
console.time('wasm');
console.log(m.exports.fib(42))
console.timeEnd('wasm');

function fib(n) { 
	n = n | 0;
	if (n < 2) { 
		return 1 | 0;
	} else {
		return (fib(n-1 | 0) | 0) + (fib(n-2 | 0) | 0);
	}
}

console.log("START JS");
console.time('js');
console.log(fib(24))
console.timeEnd('js');
console.time('js');
console.log(fib(30))
console.timeEnd('js');
console.time('js');
console.log(fib(36))
console.timeEnd('js');
console.time('js');
console.log(fib(40));
console.timeEnd('js');
console.time('js');
console.log(fib(42))
console.timeEnd('js');

function Module() {
	"use asm";

	function fib(n) { 
		n = n | 0;
		if (n < 2) { 
			return 1 | 0;
		} else {
			return (fib(n-1 | 0) | 0) + (fib(n-2 | 0) | 0);
		}
	}

	return { fib: fib };
}

var mod = Module();

console.log("START ASM");
console.time('asm');
console.log(mod.fib(24))
console.timeEnd('asm');
console.time('asm');
console.log(mod.fib(30))
console.timeEnd('asm');
console.time('asm');
console.log(mod.fib(36))
console.timeEnd('asm');
console.time('asm');
console.log(mod.fib(40))
console.timeEnd('asm');
console.time('asm');
console.log(mod.fib(42))
console.timeEnd('asm');
