import { Div, SecondaryDiv } from "../../styles/searchStyles";
import { BsSearch } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";

const Search = () => {
  return (
    <Div>
      <div className="searchBar">
        <BsSearch style={{ marginLeft: "42px" }} />
        <input firstInput="firstInput" />
        <GiPositionMarker />
        <div></div>
        <select selectCamp1="selectCamp1" name="city" selectCamp="selectCamp">
          <option value="">Selecione</option>
          <option value="CxsRS">Caxias do Sul,Rio Grande do Sul</option>
          <option value="BCSC">Balneário Camboriu, Santa Catarina</option>
          <option value="CuPR">Curitiba, Paraná</option>
        </select>
        <button type="submit" btnFirst="btnFirst">
          Search
        </button>
      </div>
      <div className="searchBarTwo">
        <input secondaryInput="secondaryInput" />
        <GiPositionMarker />
        <select selectCamp="selectCamp" name="citySegundoInput">
          <option value="">Selecione</option>
          <option value="CxsRS">Caxias do Sul,Rio Grande do Sul</option>
          <option value="BCSC">Balneário Camboriu, Santa Catarina</option>
          <option value="CuPR">Curitiba, Paraná</option>
        </select>
        <button type="submit" btnSecondary="btnSecondary">
          Search my job
        </button>
      </div>
    </Div>
  );
};

export default Search;
