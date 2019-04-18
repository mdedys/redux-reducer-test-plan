function isFunction(value) {
  return typeof value === "function"
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
      expect(this.actionValue).toBeDefined()
      expect(this.expectedValue).toBeDefined()

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
