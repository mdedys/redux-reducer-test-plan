[![NPM version][npm-image]][npm-url]
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/58505d272d3d40b8b09b0ac535d5f192)](https://app.codacy.com/app/mike_45/redux-reducer-test-plan?utm_source=github.com&utm_medium=referral&utm_content=mdedys/redux-reducer-test-plan&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.org/mdedys/redux-reducer-test-plan.svg?branch=master)](https://travis-ci.org/mdedys/redux-reducer-test-plan)
[![Coverage Status](https://coveralls.io/repos/github/mdedys/redux-reducer-test-plan/badge.svg?branch=master)](https://coveralls.io/github/mdedys/redux-reducer-test-plan?branch=master)

# redux-reducer-test-plan

Easily test reducers by passing a state, action and expected result.

## Install

```
yarn install redux-reducer-test-plan
```

## Usage

To run the test just pass the reducer into the function and then set the state, action and expected result. Finally to execute the test call `.run()`

```javascript
const TestReducer = require("redux-reducer-test-plan")

describe("Some test", () => {
  it("some test case", () => {
    TestReducer(reducer)
      .state({ a: true })
      .action({ type: "ACTION" })
      .expect({ a: false })
      .run()
  })
})
```

`.expect` can be a value or a function. If it is a function is calls the passing function with following values:

`result` and `prevState`

[npm-url]: https://npmjs.org/package/redux-reducer-test-plan
[npm-image]: https://img.shields.io/npm/v/redux-reducer-test-plan.png
