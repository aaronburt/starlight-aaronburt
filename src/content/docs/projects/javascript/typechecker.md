---
title: TypeGuardJS
---

This module provides a set of functions to determine the type of the given input. The following functions are available:

    isNumber(): returns true if the input is a number, false otherwise.
    isString(): returns true if the input is a string, false otherwise.
    isBoolean(): returns true if the input is a boolean, false otherwise.
    isNull(): returns true if the input is null, false otherwise.
    isUndefined(): returns true if the input is undefined, false otherwise.
    isSymbol(): returns true if the input is a symbol, false otherwise.
    isJSONObject(): returns true if the input is a valid JSON object, false otherwise.

Usage

To use this module, import it and call the desired function with the input as a parameter.

```javascript
import inputTypeChecker from './inputTypeChecker.js';

const input = 'hello world';
const checker = inputTypeChecker(input);

console.log(checker.isString()); // true
console.log(checker.isNumber()); // false
console.log(checker.isBoolean()); // false
console.log(checker.isNull()); // false
console.log(checker.isUndefined()); // false
console.log(checker.isSymbol()); // false
console.log(checker.isJSONObject()); // false
```

This project was built for checking types of a variable

---
https://github.com/aaronburt/typeguard-js