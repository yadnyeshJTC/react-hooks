import React, { useReducer } from "react";

enum CountActionKind {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
}

interface CountState {
  count: number;
  value: number;
}

// An interface for our actions
interface CountAction {
  type: CountActionKind;
  payload: number;
}

function counterReducer(state: CountState, action: CountAction) {
  const { type, payload } = action;
  switch (type) {
    case CountActionKind.INCREASE:
      return {
        ...state,
        count: state.count + payload,
      };
    case CountActionKind.DECREASE:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
}

const Reducer = () => {
  // reducer, initial state
  const [state, dispatch] = useReducer(counterReducer, { count: 0, value: 0 });
  return (
    <div>
      Count: {state.count}
      <br />
      {/* Calling our actions on button click */}
      <button
        onClick={() => dispatch({ type: CountActionKind.DECREASE, payload: 5 })}
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: CountActionKind.INCREASE, payload: 5 })}
      >
        +
      </button>
    </div>
  );
};

export default Reducer;
