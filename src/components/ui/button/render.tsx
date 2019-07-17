import React from "react";
import { Button } from "./style";

export const ButtonRender = ({ children, ...rest }: any) => (
  <Button {...rest}>{children}</Button>
);

export default ButtonRender;
