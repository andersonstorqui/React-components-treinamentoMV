import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
  width: 96vw;
  justify-content: center;

  .btn {
    display: flex;
    margin: 10px;
    float: left;
  }
`;

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

  background-color: ${(props) =>
    (props.fiiled && "#3AD29F") ||
    (props.outline && "#ffffff") ||
    (props.text && "#ffffff")};
  color: ${(props) =>
    (props.fiiled && "white") ||
    (props.outline && "#3AD29F") ||
    (props.text && "#3AD29F")};
  border: ${(props) =>
    (props.outline && "1px solid #3AD29F") ||
    (props.fiiled && "none") ||
    (props.text && "none")};

  width: ${(props) =>
    (props.LG && "118px") || (props.MD && "105px") || (props.SM && "92px")};
  height: ${(props) =>
    (props.LG && "57px") || (props.MD && "50px") || (props.SM && "42px")};
  margin: 10px;

  &:hover {
    color: ${(props) =>
      (props.outline && "white") ||
      (props.text && "white") ||
      (props.fiiled && "#3AD29F")};

    background-color: ${(props) =>
      (props.outline && "#3AD29F") ||
      (props.text && "#3AD29F") ||
      (props.fiiled && "white")};
    border: ${(props) => props.fiiled && "1px solid #3AD29F"};
  }

  span {
    margin-right: 6px;
  }
`;

//ESTILIZANDO ARROWS

export const ButtonArrow = styled.button.attrs((props) => ({
  type: "button",
}))`
  margin: 15px 2px;

  background-color: ${(props) =>
    (props.fiiled && "#3AD29F") ||
    (props.outline && "#ffffff") ||
    (props.text && "#ffffff")};
  color: ${(props) =>
    (props.fiiled && "white") ||
    (props.outline && "#3AD29F") ||
    (props.text && "#3AD29F")};

  border: ${(props) =>
    (props.outline && "1px solid #3AD29F") ||
    (props.fiiled && "none") ||
    (props.text && "none")};

  width: ${(props) =>
    (props.LG && "57px") || (props.MD && "50px") || (props.SM && "40px")};
  height: ${(props) =>
    (props.LG && "57px") || (props.MD && "50px") || (props.SM && "40px")};

  font-size: ${(props) => props.ArrowSM && "150px"};
  color: ${(props) =>
    (props.outline && "white") ||
    (props.text && "white") ||
    (props.fiiled && "#3AD29F")};

  background-color: ${(props) =>
    (props.outline && "#3AD29F") ||
    (props.text && "#3AD29F") ||
    (props.fiiled && "white")};
  border: ${(props) => props.fiiled && "1px solid #3AD29F"};

  &:hover {
    background-color: ${(props) =>
      (props.fiiled && "#3AD29F") ||
      (props.text && "white") ||
      (props.outline && "white")};

    color: ${(props) =>
      (props.fiiled && "white") ||
      (props.text && "#3AD29F") ||
      (props.outline && "#3AD29F")};
  }

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 15%;
  }
`;

export const DivInput = styled.div.attrs((props) => ({
  type: "div",
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button.attrs((props) => ({
  type: "button",
}))`
  width: 319px;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 15px;

  border: ${(props) =>
    (props.blue && "1px solid blue") ||
    (props.green && "1px solid green") ||
    (props.grey && "1px solid grey") ||
    (props.red && "1px solid red")};

  background-color: ${(props) => props.backGroundWhite && "#FFF"};
`;

export const InputStyles = styled.input.attrs((props) => ({
  type: "input",
}))`
  width: 314px;
  height: 50px;

  border: ${(props) =>
    (props.blue && "1px solid blue") ||
    (props.green && "1px solid green") ||
    (props.grey && "1px solid grey") ||
    (props.red && "1px solid red")};

  border: ${(props) => props.borderNone && "none"};
  color: #a8adb7;

  font-weight: 400;
  font-size: 16px;
  line-height: 160%;

  margin-top: 10px;
`;
