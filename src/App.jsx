import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Filter } from "./components/Filter";
import { Context } from "./components/Context";

function App() {
  return (
    <div className="App">
      <Context>
        <Filter />
      </Context>
    </div>
  );
}

export default App;
