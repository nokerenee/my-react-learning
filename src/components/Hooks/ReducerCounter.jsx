import { useCounterContext } from '../../Store/CounterContext';

function ReducerCounter() {

  // useReducer takes a reducer function and the initial state value
  // returns array with the state variable and a dispatch function
  const { counter, dispatch } = useCounterContext();

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
      <button onClick={handleDecrement}>Reducer Decrement</button> <br/>
      <button onClick={handleIncrementByFive}>Reducer Increment + 5</button>
      <button onClick={handleDecrementByFive}>Reducer Decrement - 5</button>
    </div>
  );
}

export default ReducerCounter;
