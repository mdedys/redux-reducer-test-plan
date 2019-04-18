function isFunction(value) {
  return typeof value === "function"
}

function isDefined(value) {
  if (value === null || value === undefined) {
    return false
  }
  return true
}

function TestReducer(reducer) {
  return {
    reducer: reducer,
    action: function(action) {
      this.actionValue = action
      return this
    },
    state: function(state) {
      this.stateValue = state
      return this
    },
    expect: function(expected) {
      this.expectedValue = expected
      return this
    },
    run: function() {
      if (!isDefined(this.actionValue)) {
        throw new Error(
          "Missing action value: expected undefined to not equal undefined"
        )
      }

      if (!isDefined(this.expectedValue)) {
        throw new Error(
          "Missing expected value: expected undefined to not equal undefined"
        )
      }

      const result = this.reducer(this.stateValue, this.actionValue)

      if (isFunction(this.expectedValue)) {
        this.expectedValue(result, this.stateValue)
      } else {
        expect(result).toEqual(this.expectedValue)
      }
    }
  }
}

module.exports = TestReducer
