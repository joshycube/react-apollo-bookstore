import React, { memo } from "react";

import Books from "@/components/books";
import Navigation from "@/components/navigation";
import Basket from "@/components/basket";
import { SceneWrapper } from "../style";

const ListBooksPage = () => (
  <SceneWrapper>
    <Navigation />
    <Basket />
    <Books />
  </SceneWrapper>
);

export default memo(ListBooksPage);
