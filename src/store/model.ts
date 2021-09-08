import { atom } from "recoil";
import { MenuStates } from "../enums/menu";

export const menuState = atom({
  key: "menuState",
  default: MenuStates.ON,
});
