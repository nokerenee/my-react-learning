import axios from 'axios';
import { createSelector } from 'reselect';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
  status: 'idle',
  entities: {},
};
function isPendingAction(action) {
  return action.type.endsWith('pending');
}
function isFulfilledAction(action) {
  return action.type.endsWith('fulfilled');
}
export const todosSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    todoAdded(state) {
      return {
        ...state,
        entities: {
          ...state.entities,
          [todo.id]: todo,
        },
      };
    },
    todosLoaded(state) {
      const newEntities = {};
      action.payload.forEach((todo) => {
        newEntities[todo.id] = todo;
      });
      return {
        ...state,
        status: 'idle',
        entities: newEntities,
      };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      // Add user to the state array
      const newEntities = {};
      action.payload.forEach((todo) => {
        newEntities[todo.id] = todo;
      });
      state.entities = newEntities;
    });
    builder.addCase(saveNewTodo.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities[action.payload.id] = action.payload;
    });
    builder.addMatcher(isPendingAction, (state, action) => {
      state.status = 'pending';
    });
    builder.addMatcher(isFulfilledAction, (state, action) => {
      state.status = 'fulfilled';
    });
  },
});
const selectTodoEntities = (state) => state.todo.entities;
export const selectTodos = createSelector(selectTodoEntities, (entities) =>
  Object.values(entities)
);
// First, create the thunk
export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async (userId, thunkAPI) => {
    const response = await axios.get('http://localhost:3000/todos');
    return response.data;
  }
);
export const saveNewTodo = createAsyncThunk(
  'users/fetchByIdStatus',
  async (title, thunkAPI) => {
    const initialTodo = { title };
    const response = await axios.post('http://localhost:3000/todos', {
      todo: initialTodo,
    });
    return response.data.todo;
  }
);
