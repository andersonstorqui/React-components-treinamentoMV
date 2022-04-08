import { Div } from "../../styles/searchStyles";
import { BsSearch } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";

const Search = () => {
  return (
    <Div>
      <div>
        <BsSearch />
        <input />
        <GiPositionMarker />
        <input type="select" />
        <button type="submit">Search</button>
      </div>
    </Div>
  );
};

export default Search;
