import * as Main from "../../styles/Buttons";

export const Button = ({ fiiled, outline, text, SM, MD, LG, ...props }) => {
  return (
    <Main>
      <button {...props}>Caption</button>;
    </Main>
  );
};
