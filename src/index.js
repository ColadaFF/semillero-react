import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";

import "@awsui/global-styles/index.css";

function App() {
  return <Router />;
}

ReactDOM.render(<App />, document.getElementById("root"));
