import React from "react";
import { Link } from "react-router-dom";

import { NavWrapper, NavItemWrapper } from "./style";

export const NavigationRender = () => (
  <NavWrapper>
    <NavItemWrapper>
      <Link to="/page/create/book">Create new</Link>
    </NavItemWrapper>
  </NavWrapper>
);

export default NavigationRender;
