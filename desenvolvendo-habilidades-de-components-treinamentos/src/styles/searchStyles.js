import styled from "styled-components";

export const Div = styled.div.attrs((props) => ({
  type: "div",
}))`
  div {
    width: 1192px;
    height: 104px;
    border: 1px solid #d6ddeb;
    box-sizing: border-box;
    margin: 16px 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  button {
    width: 105px;
    height: 50px;
    background: #3ad29f;
    margin: 0px 20px;
    border: none;
    color: #ffffff;
    display: flex;
    align-items: center;
    /* text-align: center; */
    justify-content: center;
  }
`;

//FAZER STYLED COMPONENT DINAMICO E POR  MAIS DOIS INPUTS E UM BOTÃO PARA ESTILIZAR JUNTOS, ABRAÇO FELIZ ANIVER GATÃO
