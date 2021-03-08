import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import ListContainer from "./containers/ListContainer";

function App() {
  return (
    <div>
      <CounterContainer />
      <ListContainer />
    </div>
  );
}

export default App;
