function Module() {
  "use asm";

  function add(x, y) {
    x = x | 0;
    y = y | 0;
    return x + y;
  }
  return { add: add };
}

module.exports = Module;
