import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers";
// The store now has the ability to accept thunk functions in `dispatch`
const store = configureStore({
  reducer: rootReducer,
});
export default store;
