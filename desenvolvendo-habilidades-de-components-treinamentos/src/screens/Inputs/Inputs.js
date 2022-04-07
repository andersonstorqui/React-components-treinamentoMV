import React from "react";
import { BsSearch } from "react-icons/bs";
import { DivInput, Button, InputStyles } from "../../styles/style";

class Inputs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <DivInput>
          <InputStyles
            borderFull="borderFull"
            blue="blue"
            placeholder="Insira um texto aqui"
            text="text"
          />
          <InputStyles
            borderFull="borderFull"
            grey="grey"
            placeholder="Insira um texto aqui"
            text="text"
          />
          <InputStyles
            borderFull="borderFull"
            red="red"
            placeholder="Insira um texto aqui"
            text="text"
          />
          <InputStyles
            borderFull="borderFull"
            green="green"
            placeholder="Insira um texto aqui"
            text="text"
          />
        </DivInput>
        <DivInput>
          <Button backGroundWhite="backGroundWhite" blue="blue">
            <BsSearch
              className="SVG"
              style={{
                paddingRight: "15px",
                height: "17.98px",
                width: "17.98px",
                paddingLeft: "10px",
              }}
            />
            <InputStyles
              borderNone="borderNone"
              placeholder="Insira um texto aqui"
            />
          </Button>
          <Button backGroundWhite="backGroundWhite" grey="grey">
            <BsSearch
              className="SVG"
              style={{
                paddingRight: "15px",
                height: "17.98px",
                width: "17.98px",
                paddingLeft: "10px",
              }}
            />
            <InputStyles
              borderNone="borderNone"
              placeholder="Insira um texto aqui"
            />
          </Button>

          <Button backGroundWhite="backGroundWhite" red="red">
            <BsSearch
              className="SVG"
              style={{
                paddingRight: "15px",
                height: "17.98px",
                width: "17.98px",
                paddingLeft: "10px",
              }}
            />
            <InputStyles
              borderNone="borderNone"
              placeholder="Insira um texto aqui"
            />
          </Button>

          <Button backGroundWhite="backGroundWhite" green="green">
            <BsSearch
              className="SVG"
              style={{
                paddingRight: "15px",
                height: "17.98px",
                width: "17.98px",
                paddingLeft: "10px",
              }}
            />
            <InputStyles
              borderNone="borderNone"
              placeholder="Insira um texto aqui"
            />
          </Button>
        </DivInput>
      </div>
    );
  }
}

export default Inputs;
