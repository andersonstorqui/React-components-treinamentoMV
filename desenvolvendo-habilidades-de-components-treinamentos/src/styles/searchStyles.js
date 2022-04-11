import styled from "styled-components";

export const DivPai = styled.div.attrs((props) => ({
  type: "div",
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div.attrs((props) => ({
  type: "div",
}))`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-top: 5%;
  background-color: ${(props) =>
    (props.divOne && "#FFFFFF") || (props.divTwo && "#FFFFFF")};
  border: ${(props) => props.divOne + props.divTwo && "1px solid lightgrey"};

  width: ${(props) => (props.divOne && "1192px") || (props.divTwo && "852px")};
  height: ${(props) => (props.divOne && "104px") || (props.divTwo && "89px")};
  .tracinho {
    width: 0.95px;
    height: 56px;
    background-color: #d6ddeb;
    opacity: 1;
    margin: 24px 24px;
  }
`;

export const Input = styled.input.attrs((props) => ({
  type: "input",
}))`
  width: ${(props) =>
    (props.firstInput && "417.5px") || (props.secondaryInput && "233.5px")};
  border: none;
  border-bottom: ${(props) =>
    props.firstInput + props.secondaryInput && "1px solid #D6DDEB"};
  margin-left: ${(props) =>
    props.firstInput + props.secondaryInput && "13.3px"};
`;

export const Select = styled.select.attrs((props) => ({
  type: "select",
}))`
  width: ${(props) =>
    props.selectBigDiv && "417.5px" && props.selectLittleDiv && "233.5px"};
  background-color: ${(props) =>
    props.selectBigDiv + props.selectLittleDiv && "#FFFFFF"};
  border: none;
  border-bottom: ${(props) =>
    props.selectBigDiv + props.selectLittleDiv && "1px solid #D6DDEB"};
`;

export const Button = styled.button.attrs((props) => ({
  type: "button",
}))`
  margin-left: ${(props) =>
    (props.btnFirst && "50.17px") || (props.btnSecondary && "37.6px")};
  width: ${(props) =>
    (props.btnFirst && "105px") || (props.btnSecondary && "209px")};
  height: ${(props) =>
    (props.btnFirst && "50px") || (props.btnSecondary && "57px")};
  background-color: ${(props) =>
    props.btnFirst + props.btnSecondary && "#3AD29F"};
  color: ${(props) => props.btnFirst + props.btnSecondary && "#FFFFFF"};
  border: ${(props) => props.btnFirst + props.btnSecondary && "none"};
  line-height: ${(props) => props.btnFirst + props.btnSecondary && "160%"};
  font-weight: ${(props) => props.btnFirst + props.btnSecondary && "700"};
  font-size: ${(props) =>
    (props.btnFirst && "16px") || (props.btnSecondary && "18px")};

  &:hover {
    background-color: ${(props) =>
      props.btnFirst + props.btnSecondary && "white"};

    color: ${(props) => props.btnFirst + props.btnSecondary && "#3AD29F"};
  }
`;
