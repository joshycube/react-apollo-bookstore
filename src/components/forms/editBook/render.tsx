import React, { memo } from "react";

import Button from "@/components/ui/button";
import { FormWrapper, StyledInput } from "./style";
interface IProps {
  title: string;
  price: string;
  author: string;
  setTitle: (title: string) => void;
  setAuthor: (author: string) => void;
  setPrice: (price: string) => void;
  onSave: () => void;
  onCancel: () => void;
  error: any;
}

export const EditBookFormRender = ({
  title,
  price,
  author,
  setTitle,
  setAuthor,
  setPrice,
  onCancel,
  onSave,
  error
}: IProps) => {
  return (
    <FormWrapper>
      <StyledInput
        id="input-title"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <StyledInput
        id="input-author"
        onChange={e => setAuthor(e.target.value)}
        value={author}
      />
      <StyledInput
        type="number"
        id="input-price"
        onChange={e => setPrice(e.target.value)}
        value={price}
      />
      <Button onClick={onCancel}>Cancel</Button>
      <Button onClick={onSave}>Save</Button>
      <div>
        {Object.keys(error).map(err => (
          <p>
            {err}: {error[err]}
          </p>
        ))}
      </div>
    </FormWrapper>
  );
};

export default memo(EditBookFormRender);
