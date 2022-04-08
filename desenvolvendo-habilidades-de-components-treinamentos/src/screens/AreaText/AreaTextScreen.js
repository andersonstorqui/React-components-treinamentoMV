import React, { useState } from "react";
import { Div } from "../../styles/stylesAreaText";
import {
  AiOutlineSmile,
  AiOutlineMenuFold,
  AiOutlineMenu,
} from "react-icons/ai";
import { SiBitdefender, SiInstapaper } from "react-icons/si";
import { ImLink } from "react-icons/im";
// import InputEmoji from "react-input-emoji";

class AreaText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Enter job description",
    };
  }

  alterarText = (event) => {
    this.setState({ text: event.target.value });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Div>
          <div>
            <textarea rows={5} cols={40} onChange={this.alterarText}>
              Enter job description!
            </textarea>
          </div>
          <div>
            <p>
              <AiOutlineSmile size={18} />
            </p>
            <p>
              <SiBitdefender size={18} />
            </p>
            <p>
              <SiInstapaper size={18} />
            </p>
            <p>
              <AiOutlineMenuFold size={18} />
            </p>
            <p>
              <AiOutlineMenu size={18} />
            </p>
            <p>
              <ImLink size={18} />
            </p>
          </div>
        </Div>
      </>
    );
  }
}

export default AreaText;
