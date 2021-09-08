import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { ThemeProvider } from "styled-components";
import { MenuStates, TransformStates } from "../../enums/menu";
import { menuState } from "../../store/model";
import { ButtonMenu, Header } from "../header/header-styled";
import { Main } from "../main/main-styled";
import { Nav, Text } from "../nav/nav-styled";
import { Container } from "./layout-styled";

export function Layout() {
  const [menu, setMenu] = useRecoilState(menuState);
  const [transform, setTransform] = useState(TransformStates.RIGHT);

  const menuChange = () => {
    setMenu((prevState) =>
      prevState === MenuStates.ON ? MenuStates.OFF : MenuStates.ON
    );
    setTransform((prevState) =>
      prevState === TransformStates.RIGHT
        ? TransformStates.LEFT
        : TransformStates.RIGHT
    );
  };

  const theme = {
    transform: transform,
  };

  return (
    <Container>
      <Header>
        <ButtonMenu onClick={menuChange}>menu</ButtonMenu>
      </Header>
      <ThemeProvider theme={theme}>
        <Nav>
          <Text>{menu}</Text>
        </Nav>
      </ThemeProvider>
      <Main>
        <Text>{menu}</Text>
      </Main>
    </Container>
  );
}
