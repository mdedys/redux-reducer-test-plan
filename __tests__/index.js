const expect = require("chai").expect;
const TestReducer = require("../index.js");

const reducer = function(state = {}, action) {
  switch (action.type) {
    case "ACTION_1":
      return { a: true };

    case "DEEP_OBJECT":
      return { a: { b: { c: true } } };

    default:
      return state;
  }
};

describe("ReducerTest", () => {
  it("successfully test simple state", () => {
    TestReducer(reducer)
      .state({ a: false })
      .action({ type: "ACTION_1" })
      .expect({ a: true })
      .run();
  });

  it("successfully assert deep object", () => {
    TestReducer(reducer)
      .state({ a: { b: { c: false } } })
      .action({ type: "DEEP_OBJECT" })
      .expect({ a: { b: { c: true } } })
      .run();
  });
});
