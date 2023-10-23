import { useState} from 'react';

function Todo({todo, onUpdate}) {
    const [thisTodo, setTodo] = useState(todo);
    const [isEdit, setIsEdit] = useState(todo);
    const onTodoChange = (event) => {
// onUpdateCompleted({...thisTodo, completed: !thisTodo.completed});
    };
   
    const onDeleteClick = () => {
        onDeleteClick(thisTodo);
    };
    const onEditClick = () => {
        setIsEdit(true);
    };
    const onCancelClick = () => {
        setIsEdit(false);
    };
    
    return (
        <div>
        {/* <input type = "checkbox" checked = {todo.completed} onChange={onTodoChange}></input> */}
        {todo.title}
        </div>
    );
}

export default Todo;