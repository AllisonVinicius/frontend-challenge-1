import React from "react";
import { Button, Container } from "./styles";

type IButtonProps = {
  text: string;
};
const ButtonConfirm = ({ text }: IButtonProps) => {
  return (
    <Container>
      <Button>{text}</Button>;
    </Container>
  );
};

export default ButtonConfirm;
