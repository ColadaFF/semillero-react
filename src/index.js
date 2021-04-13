import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./components/products/list";

function App() {
  return (
    <div>
      <ProductList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
