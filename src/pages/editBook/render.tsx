import React, { memo } from "react";

import EditBookForm from "@/components/forms/editBook";
import { SceneWrapper } from "../style";

const EditBookPage = () => (
  <SceneWrapper>
    <EditBookForm />
  </SceneWrapper>
);

export default memo(EditBookPage);
