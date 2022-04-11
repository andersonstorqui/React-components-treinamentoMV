import { Div } from "../../styles/searchStyles";

const SearchJob = ({
  divOne,
  divTwo,
  firstInput,
  secondaryInput,
  children,
  ...props
}) => {
  return <Div {...props}>{children}</Div>;
};

export default SearchJob;
