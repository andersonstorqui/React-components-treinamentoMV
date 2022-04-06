import { ButtonStyle } from "./styles";

export const Button = ({
  fiiled,
  outline,
  text,
  SM,
  MD,
  LG,
  children,
  ...props
}) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};
