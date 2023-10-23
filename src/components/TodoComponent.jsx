import { useState } from 'react';
function TodoComponent({ todo, onUpdate, onDelete, children }) {
  const [thisTodo, setTodo] = useState(todo);
  const [isEdit, setIsEdit] = useState(false);
  const onTodoChange = (event) => {
    const updateTodo = { ...thisTodo, completed: event.target.checked };
    setTodo(updateTodo);
    onUpdate(updateTodo);
  };
  const onTodoTitleChange = (event) => {
    const updateTodo = { ...thisTodo, title: event.target.value };
    setTodo(updateTodo);
  };
  const onSave = () => {
    onUpdate(thisTodo);
    setIsEdit(false);
  };
  const onDeleteClick = () => {
    onDelete(thisTodo);
  };
  const onEditClick = () => {
    setIsEdit(true);
  };
  const onCancelClick = () => {
    setIsEdit(false);
  };
  return (
    <>
      <div className="todo-item">
        <input
          type="checkbox"
          checked={thisTodo.completed}
          onChange={onTodoChange}
        ></input>
        {isEdit ? (
          <>
            <input defaultValue={todo.title} onChange={onTodoTitleChange} />
            <button onClick={onSave}>Save</button>
            <button onClick={onCancelClick}>Cancel</button>
          </>
        ) : (
          <>
            <span className="title">{todo.title}</span>
            <span className="created-at"></span>
            <button onClick={onEditClick}>Edit</button>
            <button onClick={onDeleteClick}>Delete</button>
          </>
        )}
      </div>
    </>
  );
}
export default TodoComponent;