import { useState } from "react";

import Posts from "./pages/Posts/Posts";
import Home from "./pages/Home/Home";
import Navigation from "./components/navigation/navigation";

import TodoProviderItem from "./components/Provider/TodoProvider";

import "./App.css";

function App() {
  const [page, setPage] = useState({
    Homepage: true,
    Postpage: false,
  });

  const onPageChange = (pageKey) => {
    const ActivePage = { ...page };
    Object.keys(ActivePage).forEach((key) => {
      if (key === pageKey) {
        ActivePage[key] = true;
      } else {
        ActivePage[key] = false;
      }
    });

    setPage(ActivePage);
  };

  return (
    <div className="container">
      <Navigation onPageChange={onPageChange} pages={page} />
      {page.Homepage && (
        <TodoProviderItem>
          <Home />
        </TodoProviderItem>
      )}
      {page.Postpage && (
        <TodoProviderItem>
          <Posts />
        </TodoProviderItem>
      )}
    </div>
  );
}

export default App;
