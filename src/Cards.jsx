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
                    <FrontFace>
                        <p>{cardContent.question}</p>
                        <img onClick={() => setVirar(!virar)} src="assets/seta_virar.png" alt="" />
                    </FrontFace>
                    <BackFace>
                        <p>{cardContent.answer}</p>
                        <img src="assets/seta_virar.png" alt="" />
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
    transform: rotateY(180deg);
    backface-visibility: hidden;
`

const FrontFace = styled.div`
    backface-visibility: hidden;
p{
    position: absolute;
    top: 18px;
    left: 15px;
    flex-wrap: wrap;
}
    
img{
    width: 25px;
    position: absolute;
    right: 16px;
    bottom: 10px;
}
`

const CardStarted = styled.div`
        background-color: #ffffff;
        width: 300px;
        height: 100px;
        border-radius: 5px;
        box-shadow: 0px 4px 5px 0px #00000026;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding-left: 15px;
        padding-right: 22px;
        transform-style: preserve-3d;
        transition: all 0.4s ease-in-out;
        transform: ${props => props.virar ? 'rotateY(180deg)' : 'rotateY(0deg)'};
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