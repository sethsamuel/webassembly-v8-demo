function Module() {
  "use asm";
  function add(x, y) {
    x = x | 0;
    y = y | 0;
    z = 0;
    for ( i = 0 ; i < 1000000; i++) {
      z = (x + y + z) | 0;
    }
    return z | 0;
  }
  return { add: add };
}
