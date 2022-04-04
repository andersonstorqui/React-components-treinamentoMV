import { ButtonStyle } from "./styles";

export const Button = ({ fiiled, outline, text, SM, MD, LG, ...props }) => {
  // console.log(props);
  return (
    <>
      <ButtonStyle {...props}>Caption</ButtonStyle>
    </>
  );
};
