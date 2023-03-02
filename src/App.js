import React from "react";
import styled from "styled-components";
import Bottom from "./Bottom";
import Top from "./Top";
import Cards from "./Cards";

export default function RenderApp() {

  const CARDSCONTENT = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ];



  return (
    <App>
      <Top></Top>
      <Cards cardsContent={CARDSCONTENT}></Cards>
      <Bottom></Bottom>
    </App>
  );

}


const App = styled.div`
`