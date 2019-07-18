import styled, { css } from "styled-components";

export interface IStyledCheckboxProps {
  isHovered: boolean;
  isFocused: boolean;
  checked: boolean;
}

export const Wrapper = styled.div`
  position: relative;
  height: 1em;
  width: 1em;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
`;

export interface IStyledCheckbox extends IStyledCheckboxProps {}

export const StyledCheckbox = styled.span<IStyledCheckboxProps>`
  box-sizing: content-box;
  position: absolute;
  height: .9em;
  width: .9em;
  border-radius: .1em;
  border: .05em solid #777;
  background-color: #ccc;
  transition: border-color 300ms;
  display: block;
  overflow: hidden;

  &:after {
    box-sizing: content-box;
    content: '';
    position: absolute;
    opacity: 0;
    left: 0px;
    top: 0px;
    width: .9em;
    height: .9em;
    border: blue;
    border-left-width: .05em;
    border-bottom-width: .05em;
    border-top-width: 0;
    border-right-width: 0;
    transform: rotate(0);
    transition: opacity 150ms cubic-bezier(0, 0.355, 0.86, 0.59),
      top 150ms cubic-bezier(0, 0.355, 0.86, 0.59), left 150ms cubic-bezier(0, 0.355, 0.86, 0.59),
      width 150ms cubic-bezier(0, 0.355, 0.86, 0.59),
      height 150ms cubic-bezier(0, 0.355, 0.86, 0.59),
      transform 150ms cubic-bezier(0, 0.355, 0.86, 0.59);
  }

  ${(props: IStyledCheckbox) =>
    props.isHovered &&
    css`
      border-color: blue;
    `}

  ${(props: IStyledCheckbox) =>
    props.isFocused &&
    css`
      outline: blue auto 5px;
      border-color: blue;
    `}

  ${(props: IStyledCheckbox) =>
    props.checked &&
    css`
      border-color: blue;

      &:after {
        opacity: 1;
        left: 0.15em;
        top: 0.15em;
        width: 0.45em;
        height: 0.25em;
        border: solid blue;
        border-left-width: 0.15em;
        border-bottom-width: 0.15em;
        border-top-width: 0;
        border-right-width: 0;
        border-bottom-left-radius: 0.1em;
        transform: rotate(-45deg);
      }
    `}
`;
