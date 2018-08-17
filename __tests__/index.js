const expect = require("chai").expect;
const TestReducer = require("../index.js");

const reducer = function(state = {}, action) {
  switch (action.type) {
    case "ACTION_1":
      return { a: true };

    case "DEEP_OBJECT":
      return { a: { b: { c: true } } };

    case "DEEP_ARRAY":
      return { a: { b: { c: [1, 2, 3] } } };

    default:
      return state;
  }
};

describe("ReducerTest", () => {
  it("no action is defined, test should fail", () => {
    try {
      TestReducer(reducer)
        .state({})
        .expect({})
        .run();
    } catch (ex) {
      expect(ex.message).to.equal(
        "Missing action: expected undefined to not equal undefined"
      );
    }
  });

  it("expected is undefined, test should fail", () => {
    try {
      TestReducer(reducer)
        .state({})
        .action({})
        .run();
    } catch (ex) {
      expect(ex.message).to.equal(
        "Missing expected value: expected undefined to not equal undefined"
      );
    }
  });

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

  it("state change is incorrect, test plan should fail", () => {
    try {
      TestReducer(reducer)
        .state({ a: { b: { c: [1, 2] } } })
        .action({ type: "DEEP_OBJECT" })
        .expect({ a: { b: { c: [1] } } })
        .run();
    } catch (ex) {
      expect(ex).to.not.be.undefined;
    }
  });
});
