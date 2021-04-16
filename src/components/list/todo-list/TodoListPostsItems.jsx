import PropTypes from "prop-types";

function TodoListPostsItems({ todo }) {
  return (
    <div
      className={`list-group-item list-group-item-action list-group-item success`}
    >
      {todo.name}'s Posts you can see on this website: {todo.website}
    </div>
  );
}

export default TodoListPostsItems;

TodoListPostsItems.propTypes = {
  todo: PropTypes.object.isRequired,
};
