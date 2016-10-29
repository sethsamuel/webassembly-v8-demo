function Module() {
	"use asm";

	function fib(n) {
		n = n | 0;
		if (n < 2) {
			return 1;
		} else {
			return (fib(n-1) | 0) + (fib(n-2) | 0);
		}
	}

	return { fib: fib };
}

module.exports = Module;
