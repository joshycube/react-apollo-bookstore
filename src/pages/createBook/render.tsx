import React, { memo } from "react";

import CreateBookForm from "@/components/forms/createBook";
import { SceneWrapper } from "../style";

const CreateBookPage = () => (
  <SceneWrapper>
    <CreateBookForm />
  </SceneWrapper>
);

export default memo(CreateBookPage);
