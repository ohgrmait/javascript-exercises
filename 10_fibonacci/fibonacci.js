const fibonacci = function(n) {
  n = +n;
  if (n < 0) return "OOPS";
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  let prev = 1;
  let curr = 1;
  let fib = null;
  for (let i = 2; i < n; i++) {
    fib = prev + curr;
    prev = curr;
    curr = fib;
  }
  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
