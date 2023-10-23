import { todosSlice } from "./TodosSlice";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  todo: todosSlice.reducer,
});
export default rootReducer;
