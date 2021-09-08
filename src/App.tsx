import React from "react";
import { RecoilRoot } from "recoil";
import { Layout } from "./components/layout/layout";

import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <Layout />
    </RecoilRoot>
  );
}

export default App;
