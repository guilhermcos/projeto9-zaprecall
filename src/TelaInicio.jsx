import styled from "styled-components"

export default function TelaInicio(props) {
    return (
        <Inicio>
            <div>
                <img src="assets/logo.png" alt="" />
                <h1>ZapRecall</h1>
            </div>
            <button data-test="start-btn" onClick={() => props.setInicio(true)}>Iniciar Recall!</button>
        </Inicio>
    )
}

const Inicio = styled.div`
    margin-top: calc(50vh - 25vh);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    div {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 0px;
    }
    img {
        margin-left: 25px;
        width: 136px;
    }
    h1 {
        color: #ffffff;
        font-family: Righteous;
        font-size: 36px;
        font-weight: 400;
        line-height: 45px;
        letter-spacing: -0.012em;
        text-align: center;
    }
    button {
        border-radius: 5px;
        width: 246px;
        height: 54px;
        background-color: #FFFFFF;
        border: 1px solid #D70900;
        font-family: Recursive;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
        color: #D70900;
    }
`