import React from "react";

import Books from "@/components/books";
import Navigation from "@/components/navigation";
import { SceneWrapper } from "../style";

const ListBooksPage = () => (
  <SceneWrapper>
    <Navigation />
    <Books />
  </SceneWrapper>
);

export default ListBooksPage;
