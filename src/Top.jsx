import React from "react";
import styled from "styled-components";

export default function Top() {
    return (
        <Topo>
            <img src="assets/logo.png" alt="" />
            <h1>ZapRecall</h1>
        </Topo>
    )
}

const Topo = styled.div`
    margin-top: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    gap: 20px;
img{
    width: 60px;
}
h1 {
    color: #ffffff;
    font-family: Righteous, sans-serif;
    font-size: 36px;
    font-weight: 700;
    line-height: 45px;
    letter-spacing: -0.012em;
    text-align: center;
}
`