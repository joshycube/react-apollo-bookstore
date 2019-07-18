import React, { useState, useCallback } from "react";

import CreateBookFormRender from "./render";
import { IBook } from "@/components/books/type";
import { QUERY_BOOKS } from "@/components/books/container";

interface IBookCreate extends Omit<IBook, "bookId"> {}

interface IProps {
  goBack: () => void;
  updateBook: (arg: { variables: IBookCreate; refetchQueries: any }) => void;
}

export const CreateBookFormComponent = ({ goBack, updateBook }: IProps) => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [error, setError] = useState<object>({});

  const onSave = useCallback(() => {
    if (title === "" || title.length > 255) {
      return setError({ title: "The input is not valid" });
    }
    if (author === "" || author.length > 255) {
      return setError({ author: "The input is not valid" });
    }
    if (!price) {
      return setError({ price: "The input is not valid" });
    }

    updateBook({
      variables: {
        title,
        price: parseFloat(price),
        author
      },
      refetchQueries: [{ query: QUERY_BOOKS }]
    });
    goBack();
  }, [title, author, price, updateBook, goBack]);

  const onCancel = () => goBack();

  return (
    <CreateBookFormRender
      title={title}
      author={author}
      price={price}
      setTitle={setTitle}
      setAuthor={setAuthor}
      setPrice={setPrice}
      onCancel={onCancel}
      onSave={onSave}
      error={error}
    />
  );
};

export default CreateBookFormComponent;
