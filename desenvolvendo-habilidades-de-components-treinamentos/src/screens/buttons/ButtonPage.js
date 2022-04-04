import React from "react";
import { Button } from "../../components/Button/Button";
import { Main } from "./style";

class ButtonPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <Main>
        <section className="btn">
          <Button fiiled="fiiled" SM="SM" />
          <Button fiiled="fiiled" MD="MD" />
          <Button fiiled="fiiled" LG="LG" />
        </section>
        <section className="btn">
          <Button outline="outline" SM="SM" />
          <Button outline="outline" MD="MD" />
          <Button outline="outline" LG="LG" />
        </section>
        <section className="btn">
          <Button text="text" SM="SM" />
          <Button text="text" MD="MD" />
          <Button text="text" LG="LG" />
        </section>
      </Main>
    );
  }
}

export default ButtonPage;
