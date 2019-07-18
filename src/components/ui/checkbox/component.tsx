import React, { memo, useState } from "react";

import CheckboxRender from "./render";
import { IProps } from "./types";

export const Checkbox = (props: IProps) => {
  const [isFocused, setFocused] = useState<boolean>(false);
  const [isHovered, setHovered] = useState<boolean>(false);

  return (
    <CheckboxRender
      isFocused={isFocused}
      isHovered={isHovered}
      setFocused={setFocused}
      setHovered={setHovered}
      {...props}
    />
  );
};

export default memo(Checkbox);
