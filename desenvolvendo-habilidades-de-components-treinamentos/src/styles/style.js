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

export const InputsStyle = styled.input.attrs((props) => ({
  type: "input",
}))``;
