import styled from "styled-components";

export const Div = styled.div.attrs((props) => ({
  type: "div",
}))`
  background-color: #cccccc;
  width: 414px;
  height: 198px;
  margin: 50px auto;

  div:nth-child(1) {
    textarea {
      width: 100%;
      height: 152px;
      border: 1px solid #d6ddeb;
      color: #a8adb7;
      /* font-family: "Lato"; */
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      padding: 16px;
    }
  }

  div:nth-last-child(1) {
    width: 100%;
    height: 48px;
    background-color: #ffffff;
    border-top: 1px solid gray;
    padding: 12px 0px 12px 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-top-width: 0px;
    border: 1px solid #d6ddeb;

    p {
      color: #7c8493;
      width: 9%;
    }
  }
`;
