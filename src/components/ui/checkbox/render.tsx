import React, { memo } from "react";

import { Wrapper, CheckboxInput, StyledCheckbox } from "./style";
import { IProps } from "./types";

export interface ICheckbox extends IProps {
  isHovered: boolean;
  isFocused: boolean;
  setHovered: (isHovered: boolean) => void;
  setFocused: (isFocused: boolean) => void;
}

export const Checkbox = (props: ICheckbox) => (
  <Wrapper>
    <StyledCheckbox
      isHovered={props.isHovered}
      isFocused={props.isFocused}
      checked={props.checked}
    />
    <CheckboxInput
      {...props}
      onMouseEnter={() => {
        props.setHovered(true);
      }}
      onMouseLeave={() => {
        props.setHovered(false);
      }}
      onFocus={() => {
        props.setFocused(true);
      }}
      onBlur={() => {
        props.setFocused(false);
      }}
      type="checkbox"
    />
  </Wrapper>
);

export default memo(Checkbox);
