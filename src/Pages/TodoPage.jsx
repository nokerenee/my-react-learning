import { useState } from "react";
import "../App.css";
import Todo from "../components/Todo";

function TodoPage() {
  const createdAt = new Date();

  // let todos = [
  //   { title: "title", completed: true, createAt },
  //   { title: "title2", completed: false, createAt },
  // ];

  const [todos, setTodos] = useState([
    { id: 1, title: "title", completed: true, createdAt },
    { id: 2, title: "title2", completed: false, createdAt },
  ]);

  const updateTodo = (newTodo) => {
    const todoIndex = todos.findIndex((todo) => todo.id === newTodo.id);
    const updatedTodos = todos.splice(todoIndex, 1, newTodo);
    setTodos(updatedTodos);
  };

const addTodo = () => {
  const maxId = Math.max(...todoList)
}

  return (
    <>
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onUpdate={updateTodo}></Todo>
      ))}
      </div>
    </>
  );
}
// const [todo, setTodo] = useState({
//   title: "Todo1",
//   completed: true,
//   createdAt,
// });

// const [todo2, setTodo2] = useState({
//   title: "Todo2",
//   completed: true,
//   createdAt,
// });

// return (
//   <>
//     <div className="read-the-docs">This is a class name</div>
//     <Todo todo={todo} message="message"></Todo>
//     <Todo todo={todo2}></Todo>
//   </>
// );

export default TodoPage;
