import React from "react";
import styled from "styled-components";
import Bottom from "./Bottom";
import Top from "./Top";

export default function RenderApp() {
  return (
    <App>
      <Top></Top>
      <Bottom></Bottom>
    </App>
  );

}

const App = styled.div`
`