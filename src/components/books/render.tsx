import React from "react";

import Button from "@/components/ui/button";
export interface IBook {
  bookId: number;
  title: string;
  price: number;
  author: string;
}

interface IProps {
  data: {
    books: IBook[];
  };
}

export const BooksRender = ({ data: { books } }: IProps) => (
  <ul>
    {books.map((book: IBook) => (
      <li key={book.title}>
        <h4>
          {book.title} - {book.author}
        </h4>
        <span>£{book.price}</span>
        <Button>Edit</Button>
        <Button>Add to basket</Button>
      </li>
    ))}
  </ul>
);

export default BooksRender;
