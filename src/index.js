import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

function App() {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Sam" animal="dog" breed="Basset Hound" />
      <Pet name="Toffee" animal="dog" breed="Border Collie" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
