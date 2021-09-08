import styled from "styled-components";

export const Nav = styled.nav`
  position: absolute;
  top: 64px;
  left: 0px;
  bottom: 0px;
  width: 200px;
  transform: translateX(${(props) => props.theme.transform}%);
  transition: transform 300ms ease-in-out 0s;
  background-color: yellow;
`;

export const Text = styled.p`
  margin: 0;
`;
