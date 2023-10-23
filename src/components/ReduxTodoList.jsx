import { useState } from 'react';
import Todo from './Todo';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, saveNewTodo } from '../Store/Reducers/TodosSlice';
import TodoComponent from './TodoComponent';
function ReduxTodoList() {
  const createdAt = new Date();
  const dispatch = useDispatch();
  const { entities: todosA, status } = useSelector((state) => state.todo);
  const todos = useSelector(selectTodos);
 
  const updateTodo = (newTodo) => {

  };
  const deleteTodo = (deleteTodo) => {
    
  };
  const addTodo = () => {
    dispatch(saveNewTodo('this is a new todo'));
  };
  return (
    <>
      <div id="todo-list">
        <h2>To-Do </h2>
        <div id="todos">
          {todos.map((todo) => (
            <TodoComponent
              key={todo.id}
              todo={todo}
              onUpdate={updateTodo}
              onDelete={deleteTodo}
            ></TodoComponent>
          ))}
        </div>
        <button onClick={addTodo}>Add todo</button>
      </div>
    </>
  );
}
export default ReduxTodoList;









