---
title: BurstJS
---

Burst is my basic testing framework that allows you to write and execute unit tests in your JavaScript codebase. It provides a set of assertion methods and utility functions that enable you to define test cases and verify expected behaviours of your code. The only reason for its existence was myself encountering problems with Typescript/ESM and NodeNext compilation with Jest


Here is an example of how to run the code.

```js
describe('Math operations tests')
    .expect(add(2, 3)).toBe(5)
    .expect(subtract(10, 4)).toBe(6);

describe('String tests')
    .expect(concat('Hello', 'World')).toBeExact('HelloWorld');
```

Each test add a count to whether it passed or failed, if you want to see the result then run.

```js
testResults();
```

This project was made to be basic, so it doesn't include mocking until I find a reason valid to my use case to include it. 

---
https://github.com/aaronburt/BurstJs