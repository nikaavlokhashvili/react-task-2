import PropTypes from "prop-types";

import TodoListPostsItems from "./TodoListPostsItems";

import { TodoProvider } from "../../components/Provider/TodoProvider";
import { useContext } from "react";

function TodoListPosts(props) {
  const { todoList } = useContext(TodoProvider);
  return (
    <div className={`list-group`}>
      {todoList.map((todo) => {
        return <TodoListPostsItems todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default TodoListPosts;

TodoListPosts.propTypes = {
  props: PropTypes.object.isRequired,
};
