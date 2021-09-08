import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ButtonMenu, Header } from "./components/header/header";

function App() {
  return (
    <div>
      <Header>
        <ButtonMenu>menu</ButtonMenu>
      </Header>
    </div>
  );
}

export default App;
