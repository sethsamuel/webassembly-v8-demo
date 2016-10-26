function Module(global) {
    "use asm";

    var exp = global.Math.exp;
    function doubleexp(value) {
        value = +value;
        return +(+exp(+value) * 2.0);
    }
    return { doubleexp: doubleexp };
}

module.exports = Module(global);
