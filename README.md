[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![dependencies Status](https://david-dm.org/mdedys/redux-reducer-test-plan/status.svg)](https://david-dm.org/mdedys/redux-reducer-test-plan)
[![devDependencies Status](https://david-dm.org/mdedys/redux-reducer-test-plan/dev-status.svg)](https://david-dm.org/mdedys/redux-reducer-test-plan?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/mdedys/redux-reducer-test-plan/badge.svg?branch=master)](https://coveralls.io/github/mdedys/redux-reducer-test-plan?branch=master)

# redux-reducer-test-plan

## Install

```
yarn install redux-reducer-test-plan
```

## Usage

To run the test just pass the reducer into the function and then set the state, action and expected result. Finally to execute the test call `.run()`

```javascript
const TestReducer = require("redux-reducer-test-plan");

describe("Some test", () => {
  it("some test case", () => {
    TestReducer(reducer)
      .state({ a: true })
      .action({ type: "ACTION" })
      .expect({ a: false })
      .run();
  });
});
```

[npm-url]: https://npmjs.org/package/redux-reducer-test-plan
[npm-image]: https://img.shields.io/npm/v/redux-reducer-test-plan.png
[ci-url]: https://travis-ci.org/mdedys/redux-reducer-test-plan
[ci-image]: https://img.shields.io/travis-ci/mdedys/redux-reducer-test-plan.svg
