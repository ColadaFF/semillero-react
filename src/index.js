import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

function App() {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Sam",
      animal: "Dog",
      breed: "Basset Hound",
    }),
    React.createElement(Pet, {
      name: "Toffee",
      animal: "Dog",
      breed: "Border Collie",
    }),
  ]);
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
