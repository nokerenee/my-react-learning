import React, { useReducer, useContext } from "react";
import counterReducer from "../Reducers/CounterReducer";

const CounterContext = React.createContext();

// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>
export const CounterProvider = (props) => {
  
  // store the current user in state at the top level
  const [counter, dispatch] = useReducer(counterReducer, 0);

  // 2. Provide the context.
  // The Provider component of any context (UserContext.Provider)
  // sends data via its value prop to all children at every level.
  // We are sending both the current user and an update function

  return (
    <CounterContext.Provider value={{ counter, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
};

// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useCounterContext = () => {
  return useContext(CounterContext);
};

// Save as CounterContext.jsx in a separate 'context' folder
