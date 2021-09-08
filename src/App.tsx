import React from "react";
import { ButtonMenu, Header } from "./components/header/header";
import { Container } from "./components/layout/layout";
import { Nav, Text } from "./components/nav/nav";
import { Main } from "./components/main/main";

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
      <Main>
        <Text>on</Text>
      </Main>
    </Container>
  );
}

export default App;
