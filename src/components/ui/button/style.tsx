import styled from "styled-components";

export const Button = styled.button`
  padding: 8px;
  border: 1px solid grey;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;

  :hover {
    border: 1px solid red;
  }

  :disabled {
    opacity: 0.2;
  }
`;
