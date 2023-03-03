import React, { useState } from "react";
import styled from "styled-components";



export default function Cards(props) {

    function RenderCards(cardContent) {
        const [selecionado, setSelecionado] = useState(false);
        const [virar, setVirar] = useState(false)
        cont++


        if (!selecionado) {
            return (
                <Card selecionado={selecionado} key={cardContent.question}>
                    <p>Pergunta {cont}</p>
                    <img onClick={() => setSelecionado(true)} src="assets/seta_play.png" alt="" />
                </Card>
            )
        } else {
            return (
                <CardStarted virar={virar} key={cardContent.question}>
                    <FrontFace virar={virar}>
                        <p>{cardContent.question}</p>
                        <img onClick={() => setVirar(!virar)} src="assets/seta_virar.png" alt="" />
                    </FrontFace>
                    <BackFace virar={virar}>
                        <p>{cardContent.answer}</p>
                        <div>
                            <button onClick={() => {setSelecionado(false); setVirar(!virar)}}  className="vermelho">Não lembrei</button>
                            <button onClick={() => {setSelecionado(false); setVirar(!virar)}} className="amarelo">Quase não lembrei</button>
                            <button onClick={() => {setSelecionado(false); setVirar(!virar)}} className="verde">Zap!</button>
                        </div>
                    </BackFace>
                </CardStarted>
            )
        }
    }

    let cont = 0;
    const cards = props.cardsContent.map(RenderCards)

    return (
        <ContainerCards>
            {cards}
        </ContainerCards>
    )
}

const BackFace = styled.div`
    backface-visibility: hidden;
    transition: all .5s;
    transform-style: preserve-3d;
    transform: rotateY(180deg);
    ${(props) => (props.virar) ? "transform: rotateY(0deg);" : "transition: rotateY(180deg);"}
    position: relative;
    align-items: center;
    background-color: #ffffff;
    display: flex;
    border-radius: 5px;
    p{
    font-family: Recursive,sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    position: absolute;
    top: 12px;
    left: 15px;
    flex-wrap: wrap;
    }

    div {
        width: 100%;
        margin-top: 80px;
        display: flex;
        gap: 8px;
        justify-content: center;
    }

    button{
        border-radius: 5px;
        border: none;
        width: 80px;
        height: 35px;
        font-family: Recursive;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 0em;
        text-align: center;
        color: #ffffff;

    }

    .vermelho {
        background-color: #FF3030;
    }

    .amarelo {
        background-color: #FF922E;
    }

    .verde {
        background-color: #2FBE34;
    }
`

const FrontFace = styled.div`
    backface-visibility: hidden;
    transition: all .5s;
    transform-style: preserve-3d;
    ${(props) => (props.virar) ? "transition: rotateY(-180deg);" : "transition: rotateY(0deg);"}
    position: relative;
p{
    position: absolute;
    top: 18px;
    left: 15px;
    flex-wrap: wrap;
}
    
img{
    width: 25px;
    position: absolute;
    top: 90px;
    right: 16px;
}
`

const CardStarted = styled.div`
        background-color: #ffffff;
        width: 300px;
        height: 120px;
        border-radius: 5px;
        box-shadow: 0px 4px 5px 0px #00000026;
    p {
        font-family: Recursive, sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;

    }
`;

const Card = styled.div`
        background-color: #ffffff;
        width: 300px;
        height: 65px;
        border-radius: 5px;
        box-shadow: 0px 4px 5px 0px #00000026;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 15px;
        padding-right: 22px;
    p {
        font-family: Recursive, sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;

    }

`

const ContainerCards = styled.div`
    width: 100%;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    overflow: scroll;
    margin-bottom: 90px;
    overflow-x: hidden;
`