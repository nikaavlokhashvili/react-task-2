import { TodoProvider } from "../../Provider/TodoProvider";
import { useContext } from "react";

import TodoListItem from "./TodoListItem";
import "./todo-list.css";

function TodoList(props) {
  const { todoList } = useContext(TodoProvider);
  return (
    <div className="list-group">
      {todoList.map((todo) => {
        return <TodoListItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
}
export default TodoList;
