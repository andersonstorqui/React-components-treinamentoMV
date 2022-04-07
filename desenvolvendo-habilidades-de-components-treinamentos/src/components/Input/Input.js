import { DivInput } from "../../styles/style";

export const Input = ({
  borderNone,
  blue,
  grey,
  red,
  green,
  borderFull,
  children,
  ...props
}) => {
  return <DivInput {...props}>{children}</DivInput>;
};
