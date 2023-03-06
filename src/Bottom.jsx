import React from "react";
import styled from "styled-components";

export default function Bottom(props) {

    function renderIcons(answer) {
        if (answer === "não") {
            return <img key={Math.random()} data-test="no-icon" src="assets/icone_erro.png" alt="" />
        } else if (answer === "quase") {
            return <img key={Math.random()} data-test="partial-icon" src="assets/icone_quase.png" alt="" />
        } else if (answer === "sim") {
            return <img key={Math.random()} data-test="zap-icon" src="assets/icone_certo.png" alt="" />
        }
    }

    const answers = props.listaBottom.map(renderIcons)

    if (props.listaBottom.includes("não") && answers.length === 8) {
        return (
            <Bot data-test="footer">
                <div data-test="finish-text">
                    <div className="principal">
                        <img src="assets/sad.png" alt="" />
                        <h1>Putz...</h1>
                    </div>
                    <h2>Ainda faltam alguns...<br></br> Mas não desanime</h2>
                </div>
                <p>{props.concluidos}/8 CONCLUÍDOS</p>
                <div className="icons">
                    {answers}
                </div>
            </Bot>
        )
    } else if (answers.length === 1) {
        return (
            <Bot data-test="footer">
                <div data-test="finish-text">
                    <div className="principal">
                        <img src="assets/party.png" alt="" />
                        <h1>Parabéns...</h1>
                    </div>
                    <h2>Você não esqueceu de <br></br>nenhum flashcard!</h2>
                </div>
                <p>{props.concluidos}/8 CONCLUÍDOS</p>
                <div className="icons">
                    {answers}
                </div>
            </Bot>
        )
    } else {
        return (
            <Bot data-test="footer">
                <p>{props.concluidos}/8 CONCLUÍDOS</p>
                <div className="icons">
                    {answers}
                </div>
            </Bot>
        )
    }
}

const Bot = styled.div`
        width: 100%;
        min-height: 70px;
        background-color: #ffffff;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        gap: 5px;
        justify-content: center;
        align-items: center;
        box-shadow: 0px -4px 6px 0px #0000000D;
    p {
        font-family: Recursive, sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;

    }
    .icons {
        display: flex;
        gap: 5px;
        margin-bottom: 10px;
    }
    .principal {
        margin-top: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        margin-bottom: 18px;
        h1 {
        font-family: Recursive;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        }
        img {
            width: 23px;
        }
    }
    h2 {
        font-family: Recursive;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
        margin-bottom: 10px;

    }
`