import React, { useState, useCallback } from "react";

import EditBookFormRender from "./render";
import { IBook } from "@/components/books/type";
import { QUERY_BOOKS } from "@/components/books/container";

interface IProps {
  data: {
    book: IBook;
  };
  goBack: () => void;
  updateBook: (arg: { variables: IBook; refetchQueries: any }) => void;
}

export const EditBookFormComponent = ({
  data: { book },
  goBack,
  updateBook
}: IProps) => {
  const [title, setTitle] = useState<string>(book.title);
  const [author, setAuthor] = useState<string>(book.author);
  const [price, setPrice] = useState<string>(book.price.toString());
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
        bookId: book.bookId,
        title,
        price: parseFloat(price),
        author
      },
      refetchQueries: [{ query: QUERY_BOOKS }]
    });
    goBack();
  }, [title, author, price, updateBook, book.bookId, goBack]);

  const onCancel = () => goBack();

  return (
    <EditBookFormRender
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

export default EditBookFormComponent;
