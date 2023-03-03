import React, { useState } from "react";
import styled from "styled-components";



export default function Cards(props) {

    function seLembrou(selecionado, setSelecionado, lembrei, setLembrei, cardContent, cont) {
        if (lembrei === "não jogado") {
            return (
                <Card data-test="flashcard" selecionado={selecionado} key={cardContent.question}>
                    <p data-test="flashcard-text">Pergunta {cont}</p>
                    <img data-test="play-btn" onClick={() => setSelecionado(true)} src="assets/seta_play.png" alt="" />
                </Card>
            )
        } else if (lembrei == "zap") {
            return (
                <Card data-test="flashcard" lembrei={lembrei} selecionado={selecionado} key={cardContent.question}>
                    <p data-test="flashcard-text">Pergunta {cont}</p>
                    <img data-test="zap-icon" onClick={() => setSelecionado(true)} src="assets/icone_certo.png" alt="" />
                </Card>
            )
        } else if (lembrei == true) {
            return (
                <Card data-test="flashcard" lembrei={lembrei} selecionado={selecionado} key={cardContent.question}>
                    <p data-test="flashcard-text">Pergunta {cont}</p>
                    <img data-test="partial-icon" onClick={() => setSelecionado(true)} src="assets/icone_quase.png" alt="" />
                </Card>
            )
        } else if (lembrei == false) {
            return (
                <Card data-test="flashcard" lembrei={lembrei} selecionado={selecionado} key={cardContent.question}>
                    <p data-test="flashcard-text">Pergunta {cont}</p>
                    <img data-test="no-icon" onClick={() => setSelecionado(true)} src="assets/icone_erro.png" alt="" />
                </Card>
            )
        } 
    }

    function RenderCards(cardContent) {
        const [selecionado, setSelecionado] = useState(false);
        const [virar, setVirar] = useState(false);
        const [lembrei, setLembrei] = useState("não jogado")
        cont++


        if (!selecionado) {
            return seLembrou(selecionado, setSelecionado, lembrei, setLembrei, cardContent, cont);
        } else {
            return (
                <CardStarted data-test="flashcard" virar={virar} key={cardContent.question}>
                    <FrontFace virar={virar}>
                        <p data-test="flashcard-text">{cardContent.question}</p>
                        <img data-test="turn-btn" onClick={() => setVirar(!virar)} src="assets/seta_virar.png" alt="" />
                    </FrontFace>
                    <BackFace virar={virar}>
                        <p data-test="flashcard-text">{cardContent.answer}</p>
                        <div>
                            <button data-test="no-btn" onClick={() => { setLembrei(false); setSelecionado(false); setVirar(!virar) }} className="vermelho">Não lembrei</button>
                            <button data-test="partial-btn" onClick={() => { setLembrei(true); setSelecionado(false); setVirar(!virar) }} className="amarelo">Quase não lembrei</button>
                            <button data-test="zap-btn" onClick={() => { setLembrei("zap"); setSelecionado(false); setVirar(!virar) }} className="verde">Zap!</button>
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
        gap: 5px;
        justify-content: center;
    }

    button{
        padding: 0;
        border-radius: 5px;
        border: none;
        width: 82px;
        height: 38px;
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
        ${ (props) => (props.lembrei==="zap") ? "color: #2FBE34; text-decoration: line-through;" : null}
        ${ (props) => (props.lembrei===true) ? "color: #FF922E; text-decoration: line-through;" : null}
        ${ (props) => (props.lembrei===false) ? "color: #FF3030; text-decoration: line-through;" : null}
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