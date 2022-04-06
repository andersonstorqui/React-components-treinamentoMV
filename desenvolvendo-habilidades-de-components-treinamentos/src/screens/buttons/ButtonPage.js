import React from "react";
import { ButtonStyle } from "../../styles/style";
import { Main } from "../../styles/style";

import { FaPlus } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

import { ButtonArrow } from "../../styles/style";

class ButtonPage extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    console.log("hello");
  }

  render() {
    return (
      <Main>
        <section className="btn">
          <ButtonStyle onClick={this.onClick} fiiled="fiiled" SM="SM">
            Caption
          </ButtonStyle>
          <ButtonStyle onClick={this.onClick} fiiled="fiiled" MD="MD">
            Caption
          </ButtonStyle>
          <ButtonStyle onClick={this.onClick} fiiled="fiiled" LG="LG">
            Caption
          </ButtonStyle>
        </section>
        <section className="btn">
          <ButtonStyle onClick={this.onClick} outline="outline" SM="SM">
            Caption
          </ButtonStyle>
          <ButtonStyle onClick={this.onClick} outline="outline" MD="MD">
            Caption
          </ButtonStyle>
          <ButtonStyle onClick={this.onClick} outline="outline" LG="LG">
            Caption
          </ButtonStyle>
        </section>
        <section className="btn">
          <ButtonStyle onClick={this.onClick} text="text" SM="SM">
            Caption
          </ButtonStyle>
          <ButtonStyle onClick={this.onClick} text="text" MD="MD">
            Caption
          </ButtonStyle>
          <ButtonStyle onClick={this.onClick} text="text" LG="LG">
            Caption
          </ButtonStyle>
        </section>

        {/* BOTÕES COM + */}

        <section className="btn">
          <ButtonStyle onClick={this.onClick} fiiled="fiiled" SM="SM">
            <span>
              <FaPlus />
            </span>
            Caption
          </ButtonStyle>
          <ButtonStyle onClick={this.onClick} fiiled="fiiled" MD="MD">
            <span>
              <FaPlus />
            </span>
            Caption
          </ButtonStyle>
          <ButtonStyle onClick={this.onClick} fiiled="fiiled" LG="LG">
            <span>
              <FaPlus />
            </span>
            Caption
          </ButtonStyle>
        </section>
        <section className="btn">
          <ButtonStyle onClick={this.onClick} outline="outline" SM="SM">
            <span>
              <FaPlus />
            </span>
            Caption
          </ButtonStyle>
          <ButtonStyle onClick={this.onClick} outline="outline" MD="MD">
            <span>
              <FaPlus />
            </span>
            Caption
          </ButtonStyle>
          <ButtonStyle onClick={this.onClick} outline="outline" LG="LG">
            <span>
              <FaPlus />
            </span>
            Caption
          </ButtonStyle>
        </section>
        <section className="btn">
          <ButtonStyle onClick={this.onClick} text="text" SM="SM">
            <span>
              <FaPlus />
            </span>
            Caption
          </ButtonStyle>
          <ButtonStyle onClick={this.onClick} text="text" MD="MD">
            <span>
              <FaPlus />
            </span>
            Caption
          </ButtonStyle>
          <ButtonStyle onClick={this.onClick} text="text" LG="LG">
            <span>
              <FaPlus />
            </span>
            Caption
          </ButtonStyle>
        </section>

        {/* BOTÕES COM --->  */}

        <div className="Arrow">
          <section>
            {/* BOTÕES STIILED */}
            <ButtonArrow onClick={this.onClick} fiiled="fiiled" SM="SM">
              <AiOutlineArrowRight size={10.04} />
            </ButtonArrow>
            <ButtonArrow onClick={this.onClick} fiiled="fiiled" MD="MD">
              <AiOutlineArrowRight size={16.25} />
            </ButtonArrow>
            <ButtonArrow onClick={this.onClick} fiiled="fiiled" LG="LG">
              <AiOutlineArrowRight size={16.57} />
            </ButtonArrow>
          </section>
          {/* BOTÕES OUTLINE */}
          <section>
            <ButtonArrow onClick={this.onClick} outline="outline" SM="SM">
              <AiOutlineArrowRight size={10.04} />
            </ButtonArrow>
            <ButtonArrow onClick={this.onClick} outline="outline" MD="MD">
              <AiOutlineArrowRight size={16.25} />
            </ButtonArrow>
            <ButtonArrow onClick={this.onClick} outline="outline" LG="LG">
              <AiOutlineArrowRight size={16.57} />
            </ButtonArrow>
          </section>
          {/* BOTÕES TEXT */}
          <section>
            <ButtonArrow onClick={this.onClick} text="text" SM="SM">
              <AiOutlineArrowRight size={10.04} />
            </ButtonArrow>
            <ButtonArrow onClick={this.onClick} text="text" MD="MD">
              <AiOutlineArrowRight size={16.25} />
            </ButtonArrow>
            <ButtonArrow onClick={this.onClick} text="text" LG="LG">
              <AiOutlineArrowRight size={16.57} />
            </ButtonArrow>
          </section>
        </div>
      </Main>
    );
  }
}

export default ButtonPage;
