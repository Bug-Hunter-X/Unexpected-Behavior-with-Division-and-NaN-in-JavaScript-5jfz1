function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This is incorrect for the case where either a or b is NaN
  }
  return a / b;
}

console.log(foo(10, 0)); // Output: Infinity
console.log(foo(10, NaN)); // Output: NaN
console.log(foo(NaN, 10)); // Output: NaN
console.log(foo(0,10)); //Output: 0
console.log(foo(NaN,0)); //Output: 0