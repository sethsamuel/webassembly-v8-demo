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