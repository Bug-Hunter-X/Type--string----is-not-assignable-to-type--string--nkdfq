# Type 'string[]' is not assignable to type 'string'
This repository demonstrates a common TypeScript error: providing an array of strings to a function that expects a single string.

## The Bug
The `greeter` function expects a single string as input, but the `user` variable is an array of strings. This mismatch causes a TypeScript compilation error.

## The Solution
The solution is to either modify the `greeter` function to accept an array of strings, or modify the way the `user` variable is used to provide only a single string to the function.