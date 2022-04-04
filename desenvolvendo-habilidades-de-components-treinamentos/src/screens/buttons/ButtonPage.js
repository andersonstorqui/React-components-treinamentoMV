import { React } from "react";
import { Button } from "../../components/Button/Button";

class ButtonPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttonProps } = this.props;

    return (
      <>
        <section className="primary">
          <Button fiiled SM />
          <Button fiiled MD />
          <Button fiiled LG />
        </section>
        <section className="secondary">
          <Button outline SM />
          <Button outline MD />
          <Button outline LG />
        </section>
        <section className="thirt">
          <Button text SM />
          <Button text MD />
          <Button text LG />
        </section>
      </>
    );
  }
}

export default ButtonPage;
