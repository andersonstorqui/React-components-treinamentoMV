import styled from "styled-components";

export const Div = styled.div.attrs((props) => ({
  type: "div",
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .searchBar {
    width: 1192px;
    border: 1px solid lightgrey;
    height: 104px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    input {
      width: 417px;
      margin-left: 13.3px;
    }
    select {
      width: 417px;
    }
  }
`;
