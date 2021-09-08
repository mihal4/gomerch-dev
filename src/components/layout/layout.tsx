import React from "react";
import { useRecoilState } from "recoil";
import { MenuStates } from "../../enums/menu";
import { menuState } from "../../store/model";
import { ButtonMenu, Header } from "../header/header-styled";
import { Main } from "../main/main-styled";
import { Nav, Text } from "../nav/nav-styled";
import { Container } from "./layout-styled";

export const Layout = () => {
  const [menu, setMenu] = useRecoilState(menuState);

  const menuChange = () => {
    setMenu((prevState) =>
      prevState === MenuStates.ON ? MenuStates.OFF : MenuStates.ON
    );
  };

  return (
    <Container>
      <Header>
        <ButtonMenu onClick={menuChange}>menu</ButtonMenu>
      </Header>
      <Nav>
        <Text>{menu}</Text>
      </Nav>
      <Main>
        <Text>{menu}</Text>
      </Main>
    </Container>
  );
};
