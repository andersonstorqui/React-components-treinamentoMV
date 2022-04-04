import styled from "styled-components";

export const ButtonStyle = styled.button.attrs((props) => ({
  type: "button",
}))`
  font: Lato;
  font-weight: 700;
  font-size: 14px;
  line-height: 22.4px;
  color: #ffffff;
  text-align: Center;
  font-style: normal;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 21px;
`;
