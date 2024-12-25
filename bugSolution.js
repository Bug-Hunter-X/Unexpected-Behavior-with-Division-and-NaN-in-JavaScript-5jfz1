function foo(a, b) {
  if (isNaN(a) || isNaN(b) || b === 0) {
    return NaN; // Correctly handles NaN and division by zero
  }
  return a / b;
}

console.log(foo(10, 0)); // Output: Infinity
console.log(foo(10, NaN)); // Output: NaN
console.log(foo(NaN, 10)); // Output: NaN
console.log(foo(0,10)); //Output: 0
console.log(foo(NaN,0)); //Output: NaN