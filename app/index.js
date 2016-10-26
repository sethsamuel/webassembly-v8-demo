const Wasm = global.Wasm || _WASMEXP_;
var fs = require('fs');
var func = process.argv[2];
var f = fs.readFileSync(`./${func}.wasm.10.s`);
var b = new Uint8Array(f).buffer;
console.log(b);
const deps = { env: {}, global : { Math: { exp : global.Math.exp } } };
// console.log(deps.global.Math);
var arg1s = [];
var arg2s = [];
if (func === 'arrays') {
	for (var i = 0; i < 4; i++) {
		arg1s[i] = [];
		arg2s[i] = [];
		for (var j = 0; j < Math.pow(i, 5); j++) {
			arg1s[i].push(Math.round(Math.random()*100));
			arg2s[i].push(Math.round(Math.random()*100));
		}
	}
} else {
	arg1s = [24, 30, 36, 40, 42];
	arg2s = arg1s;
}

var m = Wasm.instantiateModule(b, {"global.Math": global.Math});
console.log('wasm module', m);
console.log("START WASM");
for (var i = 0; i < arg1s.length; i++ ){
	if (func === 'arrays') {
		m = Wasm.instantiateModule(b, {"global.Math": global.Math}, arg1s[i].concat(arg2s[i]));
	}
	console.time('wasm');
	if (func === 'arrays') {
		console.log(m.exports[func](arg1s[i].length));
	} else {
		console.log(m.exports[func](arg1s[i], arg2s[i]));
	}
	console.timeEnd('wasm');
}

var JS = require(`./${func}.asm.js`);
console.log('js module', js);
console.log("START JS");
for (var i = 0; i < arg1s.length; i++ ){
	var js;
	if (func === 'arrays') {
		js = JS(window, {}, arg1s[i].concat(arg2s[i]));
	} else {
		js = JS(global);
	}
	console.time('js');
	console.log(js[func](arg1s[i], arg2s[i]));
	console.timeEnd('js');
}
