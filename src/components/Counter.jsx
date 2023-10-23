import { useCounterContext } from '../Store/CounterContext';

function ReducerCounter() {
  const { counter, dispatch } = useCounterContext();
  const handleIncrement = () => {
    // we call the dispatch function to make all state updates
    dispatch({ type: 'increment' });
  };
  const handleDecrement = () => {
    // dispatch takes a single argument - object passed to reducer
    dispatch({ type: 'decrement' });
  };
  return (
    <>
      <div className="ReducerCounter componentBox">
        <h2>Count: {counter}</h2>
        <button onClick={handleIncrement}>Reducer Increment</button>
        <button onClick={handleDecrement}>Reducer Decrement</button>
      </div>
    </>
  );
}
export default ReducerCounter;
