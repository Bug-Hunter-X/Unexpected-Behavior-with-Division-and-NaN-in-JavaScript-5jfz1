# Unexpected Behavior with Division and NaN in JavaScript

This repository demonstrates a common, yet subtle, error in JavaScript related to how the language handles division by zero and NaN (Not a Number). The `foo` function attempts to handle these cases, but its implementation is flawed.  Understanding this bug highlights the importance of robust error handling when dealing with potential edge cases involving arithmetic operations.

## The Bug

The primary issue lies in the function's initial check (`if (a === 0 || b === 0)`).  JavaScript's loose comparison (`==`) doesn't distinguish between `0` and `NaN`, leading to incorrect results when either `a` or `b` is `NaN`.  NaN is a special value that represents an undefined or unrepresentable number.  Any mathematical operation involving NaN results in NaN.   The code incorrectly returns 0 in these cases. 

## The Solution

The solution provides improved handling using strict equality (`===`) and explicit checks for `isNaN()`.  This approach correctly identifies and handles NaN values, preventing unexpected behavior.
