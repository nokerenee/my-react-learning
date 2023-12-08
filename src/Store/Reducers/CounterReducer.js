// reducer function - can be called anything
  // takes two arguments: the current state, and the action to be taken
  // action is passed via dispatch, state is stored in component
  const counterReducer = (state, action) => {
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
  
  export default counterReducer;
  // reducer function returns the new value of state after taking action
  // ++ Try to add more buttons for incrementing and decrementing by 5:
  // 1. Add the buttons
  // 2. Add handler functions which dispatch new types
  // 3. Update the reducer function to handle the new types
  