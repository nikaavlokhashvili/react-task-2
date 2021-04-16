import React, { useEffect } from "react";

import { useState } from "react";

// import Array from "../../data/todo-list";

import { Api_Service } from "../services/api";

export const TodoProvider = React.createContext(null);

function TodoProviderItem({ children }) {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    Api_Service.getTodoList(setTodoList);
  }, []);

  const onChange = (todo) => {
    const newState = todoList.filter((el) => el.id !== todo.id);
    setTodoList(newState);
  };

  const Add = (newTodo) => {
    const newList = [...todoList, newTodo];
    setTodoList(newList);
  };
  return (
    <TodoProvider.Provider value={{ todoList, setTodoList, onChange, Add }}>
      {children}
    </TodoProvider.Provider>
  );
}

export default TodoProviderItem;
