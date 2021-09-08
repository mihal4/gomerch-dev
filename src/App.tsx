import React from "react";
import { ButtonMenu, Header } from "./components/header/header";
import { Container } from "./components/layout/layout";
import { Nav, Text } from "./components/nav/nav";

import "./App.css";

function App() {
  return (
    <Container>
      <Header>
        <ButtonMenu>menu</ButtonMenu>
      </Header>
      <Nav>
        <Text>on</Text>
      </Nav>
    </Container>
  );
}

export default App;
