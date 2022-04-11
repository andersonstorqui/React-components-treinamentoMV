import { DivPai, Div, Input, Select, Button } from "../../styles/searchStyles";
import { BsSearch } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";

const Search = () => {
  return (
    <DivPai>
      <Div divOne="divOne">
        <BsSearch style={{ marginLeft: "42px" }} />
        <Input firstInput="firstInput" placeholder="job title on keyword" />
        <div className="tracinho"></div>
        <GiPositionMarker style={{ marginRight: "13.3px" }} />
        <Select selectBigDiv="selectBigDiv" name="city" selectCamp="selectCamp">
          <option value="">Selecione</option>
          <option selected value="CxsRS">
            Caxias do Sul,Rio Grande do Sul
          </option>
          <option value="BCSC">Balneário Camboriu, Santa Catarina</option>
          <option value="CuPR">Curitiba, Paraná</option>
        </Select>
        <Button type="submit" btnFirst="btnFirst">
          Search
        </Button>
      </Div>
      <Div divTwo="divTwo">
        <BsSearch style={{ marginLeft: "42px" }} />
        <Input secondaryInput="secondaryInput" />
        <GiPositionMarker style={{ marginRight: "13.3px" }} />
        <Select selectLittleDiv="selectLittleDiv" name="citySegundoInput">
          <option value="">Selecione</option>
          <option selected value="CxsRS">
            Caxias do Sul,Rio Grande do Sul
          </option>
          <option value="BCSC">Balneário Camboriu, Santa Catarina</option>
          <option value="CuPR">Curitiba, Paraná</option>
        </Select>
        <Button type="submit" btnSecondary="btnSecondary">
          Search my job
        </Button>
      </Div>
    </DivPai>
  );
};

export default Search;

/*// import styled from "styled-components";

// export const Div = styled.div.attrs((props) => ({
//   type: "div",
// }))`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   .searchBar {
//     width: 1192px;
//     border: 1px solid lightgrey;
//     height: 104px;
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     align-items: center;

//     input {
//       width: 417px;
//       color: #202430;
//       margin-left: 13.3px;
//       border: none;
//       border-bottom: 1px solid #d6ddeb;
//     }
//     select {
//       border: none;
//       border-bottom: 1px solid #d6ddeb;
//       color: #202430;
//       background-color: #ffffff;
//       width: 417px;
//     }
//     button {
//       background-color: ${(props) =>
//         (props.btnFirst && "green") || (props.btnSecondary && "red")};
//     }
//   }
//   .tracinho {
//     width: 0.95px;
//     height: 56px;
//     background-color: #d6ddeb;
//     opacity: 1;
//     margin: 24px 24px;
//   }
// `;
*/
