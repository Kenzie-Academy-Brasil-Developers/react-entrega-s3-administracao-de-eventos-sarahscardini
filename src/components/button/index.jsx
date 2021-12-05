import React from "react";
import { Container, ButtonStyle } from "./style";

const Button = ({ text, name, onClick, type = "button" }) => {
  return (
    <Container>
      <ButtonStyle type={type} onClick={onClick} className={name}>
        {text}
      </ButtonStyle>
    </Container>
  );
};

export default Button;
