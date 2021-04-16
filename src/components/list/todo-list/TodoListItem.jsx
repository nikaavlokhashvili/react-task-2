import { TodoProvider } from "../../Provider/TodoProvider";
import { useContext } from "react";

import PropTypes from "prop-types";

function TodoListItem({ todo }) {
  const { onChange } = useContext(TodoProvider);
  return (
    <div
      className={`list-group-item list-group-item-action list-group-item success`}
      onClick={() => onChange(todo)}
    >
      {todo.name} - Email adress: {todo.email} ---------- Username:{" "}
      {todo.username} ---------------- Phone Number: {todo.phone}
    </div>
  );
}

export default TodoListItem;

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
