const assert = require("chai").assert;

function TestReducer(reducer) {
  return {
    reducer: reducer,
    action: function(action) {
      this.actionValue = action;
      return this;
    },
    state: function(state) {
      this.stateValue = state;
      return this;
    },
    expect: function(expected) {
      this.expectedValue = expected;
      return this;
    },
    run: function() {
      assert.exists(this.actionValue, "Missing action");
      assert.exists(this.expectedValue, "Missing expected value");

      const result = this.reducer(this.stateValue, this.actionValue);
      assert.deepEqual(result, this.expectedValue);
    }
  };
}

module.exports = TestReducer;
