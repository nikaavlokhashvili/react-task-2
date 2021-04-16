import { useState, useContext } from "react";
import { TodoProvider } from "../../Provider/TodoProvider";

function AddForm(props) {
  const { Add } = useContext(TodoProvider);
  const [name, setName] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const newTodo = { name };

    Add(newTodo);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="todoName" className="form-label">
          Write Information You Want To Store
        </label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddForm;
