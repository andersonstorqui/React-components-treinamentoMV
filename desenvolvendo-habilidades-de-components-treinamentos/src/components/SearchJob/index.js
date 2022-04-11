import { Div } from "../../styles/searchStyles";

const SearchJob = ({
  bigDiv,
  titleBig,
  littleDiv,
  titleLittle,
  btnLitlleDiv,
  btnBigDiv,
  children,
  ...props
}) => {
  return <Div {...props}>{children}</Div>;
};

export default SearchJob;
