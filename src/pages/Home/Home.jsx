import PropTypes from "prop-types";

import AddForm from "../../components/forms/add-todo-form";
import TodoList from "../../components/list/todo-list";

function Home(props) {
  return (
    <div className="row">
      <div className="col-6">
        <AddForm />
      </div>

      <div className="col-6">
        <TodoList />
      </div>
    </div>
  );
}

export default Home;

Home.propTypes = {
  props: PropTypes.object.isRequired,
};
