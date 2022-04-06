import { ButtonArrow } from "../../styles/style";

const BtnArrow = ({
  fiiled,
  outline,
  text,
  SM,
  MD,
  LG,
  children,
  ...props
}) => {
  return <ButtonArrow {...props}>{children}</ButtonArrow>;
};

export default BtnArrow;
