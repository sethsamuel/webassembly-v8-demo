function Module() {
  "use asm";

  function add(x, y) {
    x = x | 0;
    y = y | 0;
    var i = 0;
    var z = 0;
    for (i ; i < 100000; i = i + 1) {
      z = (x + y + z);
    };
    return z;
  }
  return { add: add };
}

module.exports = Module();
