// mport React from "react";
// import TodoListPosts from "../../components/list/todo-list/TodoListPosts";

// class Posts extends React.Component {
//   render() {
//     return (
//       <div className="col-6">
//         <TodoListPosts />
//       </div>
//     );
//   }
// }

// export default Posts;i

import PropTypes from "prop-types";

import TodoListPostsItems from "../../components/list/todo-list/TodoListPostsItems";

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
