export interface ReducerTestPlan<T1, T2> {
  actionValue: T2 | null
  stateValue: T1 | null
  expectedValue: T1 | null | ((result: T1, stateValue: T1) => void)
  reducer: (state: T1, action: T2) => T1
  action(action: T2): ReducerTestPlan<T1, T2>
  state(state: T1): ReducerTestPlan<T1, T2>
  expect(
    expected: T1 | ((result: T1, stateValue: T1) => void)
  ): ReducerTestPlan<T1, T2>
  run(): void
}

export default function reducerTestPlan<T1, T2>(
  reducer: (state: T1, action: T2) => T1
): ReducerTestPlan<T1, T2>
