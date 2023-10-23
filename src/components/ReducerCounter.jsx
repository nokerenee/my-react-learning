import { useReducer } from "react";

function ReducerCounter() {
  // reducer function - can be called anything
  // takes two arguments: the current state, and the action to be taken
  // action is passed via dispatch, state is stored in component
  const reducer = (state, action) => {
    switch (
      action.type // switch statements are common in reducers
    ) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "incrementByFive":
        return state + 5;
      case "decrementByFive":
        return state - 5;
      default:
        return state;
    }
  };
  // reducer function returns the new value of state after taking action

  // useReducer takes a reducer function and the initial state value
  // returns array with the state variable and a dispatch function
  const [counter, dispatch] = useReducer(reducer, 0);

  const handleIncrement = () => {
    // we call the dispatch function to make all state updates
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    // dispatch takes a single argument - object passed to reducer
    dispatch({ type: "decrement" });
  };

  const handleIncrementByFive = () => {
    dispatch({ type: "incrementByFive" });
  };

  const handleDecrementByFive = () => {
    dispatch({ type: "decrementByFive" });
  };

  return (
    <div className="ReducerCounter componentBox">
      <h2>Count: {counter}</h2>
      <button onClick={handleIncrement}>Reducer Increment</button>
      <button onClick={handleDecrement}>Reducer Decrement</button>
      <button onClick={handleIncrementByFive}>Reducer Increment + 5</button>
      <button onClick={handleDecrementByFive}>Reducer Decrement - 5</button>
    </div>
  );
}

export default ReducerCounter;
