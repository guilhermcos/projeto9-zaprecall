import React from "react";
import styled from "styled-components";

export default function Bottom(){
    return (
        <Bot>
            <p>0/4 CONCLUÍDOS</p>
        </Bot>
    )
}

const Bot = styled.div`
        width: 100%;
        height: 70px;
        background-color: #ffffff;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
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
`